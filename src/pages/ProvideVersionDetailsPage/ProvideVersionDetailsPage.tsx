import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";

import { NewAppPageFooterButtons } from "../../components/NewAppPageFooterButtons/NewAppPageFooterButtons";
import { Section } from "../../components/Section/Section";
import './ProvideVersionDetailsPage.scss'
interface ProvideVersionDetailsPageProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

export function ProvideVersionDetailsPage({
  onClickBack,
  onClickContinue,
}: ProvideVersionDetailsPageProps) {
  return (
    <div className="provide-version-details-page-container">
      <div className="provide-version-details-page-header">
        <Header
          title="Provide version details"
          description="Define version information for your app. This will inform users about this version’s updates on the storefront."
        />
      </div>

      <Section label="App Version" tooltip="More info" tooltipText='More Info'>
        <Input
          helpMessage={"This is the first version of the app to be published"}
          label="Version"
          placeholder="0.0.0"
          required
          tooltip="version"
        />

        <Input
          component="textarea"
          label="Notes"
          localized
          placeholder={"Enter app description"}
          required
          tooltip="notes"
        />
      </Section>

      <NewAppPageFooterButtons
        showBackButton={true}
        onClickBack={() => onClickBack()}
        onClickContinue={() => onClickContinue()}
      />
    </div>
  );
}
