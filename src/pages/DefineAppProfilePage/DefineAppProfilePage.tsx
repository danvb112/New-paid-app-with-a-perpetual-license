import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { UploadLogo } from "../../components/UploadLogo/UploadLogo";
import { Input } from "../../components/Input/Input";
import { NewAppPageFooterButtons } from "../../components/NewAppPageFooterButtons/NewAppPageFooterButtons";
import { UploadedFile } from "../../components/FileList/FileList";
import { useState } from "react";
import { uniqueId } from "lodash";
import { filesize } from "filesize";

import './DefineAppProfilePage.scss'
import { MultiSelect } from "../../components/MultiSelect/MultiSelect";
interface DefineAppProfilePageProps {
    onClickBack: () => void,
    onClickContinue: () => void
}

const CategoriesItems = [
    {
      label: "Experience Management",
      value: "Experience Management",
      checked: false
    },
    {
      label: "Collaboration and Knowledge Sharing",
      value: "Collaboration and Knowledge Sharing",
      checked: false
    },
];

const TagsItems = [
    {
      label: "Analytics",
      value: "Analytics",
      checked: false
    },
    {
      label: "Database",
      value: "Database",
      checked: false
    },
    {
      label: "Data Visualization",
      value: "Data Visualization",
      checked: false
    },
    {
      label: "Performance Management",
      value: "Performance Management",
      checked: false
    },
  ]

export function DefineAppProfilePage({
    onClickBack,
    onClickContinue
}: DefineAppProfilePageProps) {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const updateFile = (id: string, data: UploadedFile) => {
        const newUploadedFiles = uploadedFiles.map(uploadedFile => {
            if (uploadedFile.id === id) {
                return {
                    ...uploadedFile,
                    ...data
                };
            }
            return uploadedFile;
        });
        setUploadedFiles(newUploadedFiles);
    }
    const processUpload = (uploadedFile: UploadedFile) => {
        const data = new FormData();
        data.append('file', uploadedFile.file, uploadedFile.fileName);
        // api.post().then().catch()...
    }
    const handleUpload = (files: FileList) => {
        const file = files[0];
        const newUploadedFiles: UploadedFile[] = [{
            file,
            id: uniqueId(),
            fileName: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: true,
            error: false
        }];
        setUploadedFiles([
            ...uploadedFiles,
            ...newUploadedFiles
        ]);
        newUploadedFiles.forEach(processUpload)
        // await api.post();
    }
    const handleDelete = (id: string) => {
        // await api.delete()
        setUploadedFiles(
            uploadedFiles.filter(uploadedFile => uploadedFile.id !== id)
        );
    }

    return (
        <div className="profile-page-container">
            <Header
                title="Define the app profile"
                description="Enter your new app details. 
                                This information will be used for submission, 
                                presentation, customer support, and search capabilities."
            />
            <div className="profile-page-body-container">
                <Section label="App Info" tooltip="More Infor" tooltipText="More info">
                    <UploadLogo
                        uploadedFile={uploadedFiles[0]}
                        onUpload={handleUpload}
                        onDeleteFile={handleDelete}
                    />

                    <div>
                        <Input
                            placeholder="Enter app name"
                            component="input"
                            label="Name"
                            required
                            tooltip="Name"
                        />

                        <Input 
                            placeholder="Enter app description" 
                            component="textarea" 
                            label="Description" 
                            localized 
                            required 
                            tooltip="Description"
                        />

                        <MultiSelect 
                            label="Categories"
                            required
                            tooltip="Categories"
                            items={CategoriesItems}
                            onChange={() => {}}
                            placeholder="Select categories"
                        />

                        <MultiSelect 
                            label="Tags"
                            required
                            tooltip="Tags"
                            items={TagsItems}
                            onChange={() => {}}
                            placeholder="Select tags"
                        />
                    </div>
                </Section>
            </div>

            <NewAppPageFooterButtons
                showBackButton
                onClickBack={() => onClickBack()}
                onClickContinue={() => onClickContinue()}
            />
        </div>
    );
}