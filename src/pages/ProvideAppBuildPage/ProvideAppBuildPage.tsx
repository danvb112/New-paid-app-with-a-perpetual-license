import { Header } from '../../components/Header/Header';
import { RadioCard } from '../../components/RadioCard/RadioCard';
import { Section } from '../../components/Section/Section';

import cancelIcon from '../../assets/icons/cancel-icon.svg';
import taskCheckedIcon from '../../assets/icons/task-checked-icon.svg';
import cloudIcon from '../../assets/icons/cloud-fill.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import uploadIcon from '../../assets/icons/upload-fill.svg';

import './ProvideAppBuildPage.scss';
import { useState } from 'react';
import { NewAppPageFooterButtons } from '../../components/NewAppPageFooterButtons/NewAppPageFooterButtons';
import { DropzoneUpload } from '../../components/DropzoneUpload/DropzoneUpload';
import { FileList, UploadedFile } from '../../components/FileList/FileList';
import { filesize } from 'filesize';
import { uniqueId } from 'lodash';

interface ProvideAppBuildPageProps {
    onClickBack: () => void;
    onClickContinue: () => void;
}

const acceptFileTypes = {
    "application/zip": [".zip"],
    "application/lpkg": [".lpkg"]
}

export function ProvideAppBuildPage({
    onClickBack,
    onClickContinue,
}: ProvideAppBuildPageProps) {
    const [selectedSaasCompatible, setSelectedSaasCompatible] = useState('yes');
    const [selectedAppBuild, setSelectedAppBuild] = useState('viaZipOrLpkgUpload');

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

    const handleUpload = (files: File[]) => {
        const newUploadedFiles: UploadedFile[] = files.map((file) => ({
            file,
            id: uniqueId(),
            fileName: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: true,
            error: false
        }));

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
        <div className='provide-app-build-page-container'>
            <Header
                description='Use one of the following methods to provide your app builds.'
                title='Provide app build'
            />

            <Section
                required
                label='LXC SaaS Compatible?'
                tooltip='More Info'
                tooltipText='MoreInfo'
            >
                <div className='provide-app-build-page-saas-compatible-container'>
                    <RadioCard
                        description='Lorem ipsum dolor sit amet consectetur.'
                        title='Yes'
                        value='yes'
                        icon={taskCheckedIcon}
                        selected={selectedSaasCompatible}
                        setSelected={setSelectedSaasCompatible}
                        tooltip='More Info'
                    />

                    <RadioCard
                        description='Lorem ipsum dolor sit amet consectetur.'
                        title='No'
                        value='no'
                        icon={cancelIcon}
                        selected={selectedSaasCompatible}
                        setSelected={setSelectedSaasCompatible}
                        tooltip='More Info'
                    />
                </div>
            </Section>

            <Section
                required
                label='App Build'
                tooltip='More Info'
                tooltipText='MoreInfo'
            >
                <div className='provide-app-build-page-app-build-radio-container'>
                    <RadioCard
                        disabled
                        description='Use any build from any available Liferay Experience Cloud account (requires LXC account) '
                        title='Via Liferay Experience Cloud Integration'
                        value='liferayExperienceCloudIntegration'
                        icon={cloudIcon}
                        selected={selectedAppBuild}
                        setSelected={setSelectedAppBuild}
                        tooltip='More Info'
                    />

                    <RadioCard
                        disabled
                        description='Use any build from your computer connecting with a Github provider'
                        title='Via GitHub Repo'
                        value='viaGithubRepo'
                        icon={githubIcon}
                        selected={selectedAppBuild}
                        setSelected={setSelectedAppBuild}
                        tooltip='More Info'
                    />

                    <RadioCard
                        description='Lorem ipsum dolor sit amet consectetur. Consectetur vulputate massa faucibus mattis a quam.'
                        title='Via ZIP or LPKG Upload'
                        value='viaZipOrLpkgUpload'
                        icon={uploadIcon}
                        selected={selectedAppBuild}
                        setSelected={setSelectedAppBuild}
                        tooltip='More Info'
                    />
                </div>
            </Section>

            <Section
                description='Select a local file to upload'
                label='Upload LPKG File'
                required
                tooltip='MoreInfo'
                tooltipText='MoreInfo'
            >
                <FileList
                    onDelete={handleDelete}
                    type='document'
                    uploadedFiles={uploadedFiles}
                />

                <DropzoneUpload
                    buttonText='Select a file'
                    title='Drag and drop to upload or'
                    description='Only ZIP and LPKG files are allowed. Max file size is 500MB '
                    maxFiles={1}
                    multiple={false}
                    maxSize={500000000}
                    onHandleUpload={handleUpload}
                    acceptFileTypes={acceptFileTypes}
                />
            </Section>

            <NewAppPageFooterButtons
                showBackButton
                onClickContinue={() => onClickContinue()}
                onClickBack={() => onClickBack()}
            />
        </div>
    );
}