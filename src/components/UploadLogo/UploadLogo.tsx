import ClayButton from '@clayui/button';

import emptyImage from '../../assets/icons/emptyImage.svg';

import './UploadLogo.scss';
import { UploadedFile } from '../FileList/FileList';

interface UploadLogoProps {
    uploadedFile?: UploadedFile;
    onUpload: (files: FileList | null) => void
    onUploadedFileChange: () => void;
}

export function UploadLogo({
    uploadedFile,
    onUploadedFileChange,
    onUpload
}: UploadLogoProps) {
    return (
        <div className='upload-logo-container'>
            <div
                style={{
                    backgroundImage: `url(${uploadedFile?.preview ?? emptyImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: "50% 50%",
                }}
                className='upload-logo-icon'
            />

            <input
                type="file"
                name="file"
                id="file"
                onChange={({ target: { files } }) => onUpload(files)} />
            <label
                className='upload-logo-upload-label'
                htmlFor="file"
            >
                Upload Image
            </label>

            <button className='upload-logo-delete-button' onClick={() => onUploadedFileChange()}>
                <span className='upload-logo-delete-button-text'>Delete</span>
            </button>
        </div>
    );
}