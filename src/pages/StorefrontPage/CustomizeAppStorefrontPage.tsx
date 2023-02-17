import { filesize } from 'filesize';
import { uniqueId } from 'lodash';
import { useState } from 'react';

import { DropzoneUpload } from '../../components/DropzoneUpload/DropzoneUpload';
import { FileList, UploadedFile } from '../../components/FileList/FileList';
import { Header } from '../../components/Header/Header';
import { NewAppPageFooterButtons } from '../../components/NewAppPageFooterButtons/NewAppPageFooterButtons';
import { Section } from '../../components/Section/Section';
import { useAppContext } from '../../manage-app-state/AppManageState';
import { TYPES } from '../../manage-app-state/actionTypes';
import { createApp, createImage } from "../../utils/api";
import './CustomizeAppStorefrontPage.scss';
import { submitBase64EncodedFile } from '../../utils/util';

const acceptFileTypes = {
	'image/*': ['.png', '.svg', '.jpg'],
};

interface CustomizeAppStorefrontPageProps {
	onClickBack: () => void;
	onClickContinue: () => void;
}

export function CustomizeAppStorefrontPage({
	onClickBack,
	onClickContinue,
}: CustomizeAppStorefrontPageProps) {
	const [{appERC, appStorefrontImages}, dispatch] = useAppContext();

	const handleUpload = (files: File[]) => {
		if(files.length > 5 || appStorefrontImages.length > 5){
			return;
		}
		if (appStorefrontImages.length + files.length < 6) {
			const newUploadedFiles: UploadedFile[] = files.map((file) => ({
				file,
				id: uniqueId(),
				fileName: file.name,
				readableSize: filesize(file.size),
				preview: URL.createObjectURL(file),
				progress: 0,
				uploaded: true,
				error: false,
			}));

			dispatch({
				payload: {
					files: [...appStorefrontImages, ...newUploadedFiles],
				},
				type: TYPES.UPLOAD_APP_STOREFRONT_IMAGES,
			});
		}
	};

	const handleDelete = (id: string) => {
		const files = appStorefrontImages.filter((uploadedFile) => uploadedFile.id !== id);

		dispatch({
			payload: {
				files
			},
			type: TYPES.UPLOAD_APP_STOREFRONT_IMAGES,
		});
	};

	return (
		<div className='storefront-page-container'>
			<Header
				title='Customize app storefront'
				description='Design the storefront for your app. This will set the information displayed on ths app’s page.'
			/>

			<Section
				required
				label='App Storefront'
				tooltip='More Info'
				tooltipText='More Info'
			>
				<div className='storefront-page-info-container'>
					<span className='storefront-page-info-text'>
						Add up to 5 images
					</span>

					{!!(Object.keys(appStorefrontImages[0]).length === 0) && (
						<button
							className='storefront-page-info-button'
							onClick={() => {
								dispatch({
									payload: {
										files: [],
									},
									type: TYPES.UPLOAD_APP_STOREFRONT_IMAGES,
								});
							}}
						>
							Remove all
						</button>
					)}
				</div>

				<FileList
					onDelete={handleDelete}
					type='image'
					uploadedFiles={appStorefrontImages}
				/>

				<DropzoneUpload
					acceptFileTypes={acceptFileTypes}
					buttonText='Select a file'
					description='Only gif, jpg, png are allowed. Max file size is 5MB '
					maxFiles={5}
					maxSize={5000000}
					multiple={true}
					onHandleUpload={handleUpload}
					title='Drag and drop to upload or'
				/>
			</Section>

			<NewAppPageFooterButtons
				onClickBack={() => onClickBack()}
				onClickContinue={() => {
					appStorefrontImages.forEach((image) => {
						submitBase64EncodedFile(
							appERC,
							image.file,
							createImage,
							image.fileName,
						);
					});

					onClickContinue();
				}}
			/>
		</div>
	);
}
