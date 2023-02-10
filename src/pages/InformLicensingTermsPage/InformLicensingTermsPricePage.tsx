import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";

import "./InformLicensingTermsPage.scss";
import { NewAppPageFooterButtons } from "../../components/NewAppPageFooterButtons/NewAppPageFooterButtons";
import { LicensePriceCard } from "../../components/LicensePriceCard/LicensePriceCard";

interface InformLicensingTermsPricePageProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

export function InformLicensingTermsPricePage({
  onClickBack,
  onClickContinue,
}: InformLicensingTermsPricePageProps) {
  return (
    <div className="informing-licensing-terms-page-container">
      <Header
        description="Define the licensing approach for your app. This will impact users' licensing renew experience."
        title="Inform licensing terms"
      />

      <Section
        label="Standard License prices"
        required
        tooltip="More Info"
        tooltipText="More Info"
      >
        <LicensePriceCard price={""} currency={""} />
      </Section>

      <NewAppPageFooterButtons
        onClickBack={() => onClickBack()}
        onClickContinue={() => onClickContinue()}
        showBackButton
      />
    </div>
  );
}
