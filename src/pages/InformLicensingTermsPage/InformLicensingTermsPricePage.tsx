import { Header } from '../../components/Header/Header';
import { LicensePriceCard } from '../../components/LicensePriceCard/LicensePriceCard';
import { NewAppPageFooterButtons } from '../../components/NewAppPageFooterButtons/NewAppPageFooterButtons';
import { Section } from '../../components/Section/Section';
import { useAppContext } from '../../manage-app-state/AppManageState';
import { TYPES } from '../../manage-app-state/actionTypes';
import './InformLicensingTermsPage.scss';
import { createAppLicensePrice } from "../../utils/api";

interface InformLicensingTermsPricePageProps {
	onClickBack: () => void;
	onClickContinue: () => void;
}

export function InformLicensingTermsPricePage({
	onClickBack,
	onClickContinue,
}: InformLicensingTermsPricePageProps) {
	const [{appLicensePrice, appProductId, appId}, dispatch] = useAppContext();


	return (
		<div className='informing-licensing-terms-page-container'>
			<Header
				description="Define the licensing approach for your app. This will impact users' licensing renew experience."
				title='Inform licensing terms'
			/>

			<Section
				label='Standard License prices'
				required
				tooltip='More Info'
				tooltipText='More Info'
			>
				<LicensePriceCard dispatch={dispatch} price={appLicensePrice} currency={''}/>
			</Section>

			<NewAppPageFooterButtons
				onClickBack={() => onClickBack()}
				onClickContinue={() => {
					createAppLicensePrice({
						body: {
							"sku": "default",
							"price": parseFloat(appLicensePrice)
							
						},
						appProductId
					  });

					onClickContinue();
				}}
				showBackButton
			/>
		</div>
	);
}
