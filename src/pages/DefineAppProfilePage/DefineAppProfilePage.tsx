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
interface DefineAppProfilePageProps {
    onClickBack: () => void,
    onClickContinue: () => void
}
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

                        <Input
                            placeholder="Select categories"
                            component="input"
                            label="Categories"
                            required 
                            tooltip="Categories"
                        />

                        <Input 
                            placeholder="Select tags" 
                            component="input" 
                            label="Tags" 
                            required 
                            tooltip="Tags"
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