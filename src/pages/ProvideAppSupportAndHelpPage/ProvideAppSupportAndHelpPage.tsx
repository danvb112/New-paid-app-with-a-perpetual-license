import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { NewAppPageFooterButtons } from '../../components/NewAppPageFooterButtons/NewAppPageFooterButtons';
import { Section } from '../../components/Section/Section';
import { useAppContext } from '../../manage-app-state/AppManageState';
import { TYPES } from '../../manage-app-state/actionTypes';
import './ProvideAppSupportAndHelpPage.scss';

interface ProvideAppSupportAndHelpPageProps {
	onClickBack: () => void;
	onClickContinue: () => void;
}

export function ProvideAppSupportAndHelpPage({
	onClickBack,
	onClickContinue,
}: ProvideAppSupportAndHelpPageProps) {
	const [
    {
      appDocumentationURL,
      appInstallationGuideURL,
      appUsageTermsURL,
      publisherWebsiteURL,
      supportURL,
    },
    dispatch,
  ] = useAppContext();
	
	return (
		<div className='provide-app-support-and-help-page-container'>
			<div className='provide-app-support-and-help-page-header'>
				<Header
					title='Provide app support and help'
					description='Inform the support and help references. This will impact how users will experience this app’s customer support and learning.'
				/>
			</div>

			<Section
				label='App Support and help'
				tooltip='More info'
				tooltipText='More Info'
			>
				<Input
					label='Support URL'
					onChange={({ target }) =>
						dispatch({
							payload: {
								value: target.value,
							},
							type: TYPES.UPDATE_APP_SUPPORT_URL,
						})
					}
					placeholder='http:// Enter app name'
					required
					value={supportURL}
				/>

				<Input
					label='Publisher website URL'
					onChange={({ target }) =>
						dispatch({
							payload: {
								value: target.value,
							},
							type: TYPES.UPDATE_APP_PUBLISHER_WEBSITE_URL,
						})
					}
					placeholder='http:// Enter app name'
					value={publisherWebsiteURL}
				/>

				<Input
					label='App usage terms (EULA) URL'
					onChange={({ target }) =>
						dispatch({
							payload: {
								value: target.value,
							},
							type: TYPES.UPDATE_APP_USAGE_TERMS_URL,
						})
					}
					placeholder='http:// Enter app name'
					value={appUsageTermsURL}
				/>

				<Input
					label='App documentation URL'
					onChange={({ target }) =>
						dispatch({
							payload: {
								value: target.value,
							},
							type: TYPES.UPDATE_APP_DOCUMENTATION_URL,
						})
					}
					placeholder='http:// Enter app name'
					value={appDocumentationURL}
				/>

				<Input
					label='App installation and uninstallation guide URL'
					onChange={({ target }) =>
						dispatch({
							payload: {
								value: target.value,
							},
							type: TYPES.UPDATE_APP_INSTALLATION_AND_UNINSTALLATION_GUIDE_URL,
						})
					}
					placeholder='http:// Enter app name'
					value={appInstallationGuideURL}
				/>
			</Section>

			<NewAppPageFooterButtons
				disableContinueButton={!supportURL}
				showBackButton={true}
				onClickBack={() => onClickBack()}
				onClickContinue={() => {
					dispatch({
						type: TYPES.SUBMIT_APP_SUPPORT,
					});

					onClickContinue();
				}}
			/>
		</div>
	);
}
