import { Header } from "../../components/Header/Header";
import { NewAppPageFooterButtons } from "../../components/NewAppPageFooterButtons/NewAppPageFooterButtons";
import { Section } from "../../components/Section/Section";


import {
  initialReviewAndSubmitAppPageItems,
} from "./ReviewAndSubmitAppPageUtil";

import "./ReviewAndSubmitAppPage.scss";

import aCoLibraries from "../../assets/images/a&co-libraries.svg";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { CardSection } from "./CardSection";

interface ReviewAndSubmitAppPageProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

export function ReviewAndSubmitAppPage({
  onClickBack,
  onClickContinue,
}: ReviewAndSubmitAppPageProps) {
  return (
    <div className="review-and-submit-app-page-container">
      <div className="review-and-submit-app-page-header">
        <Header
          title="Review and submit app"
          description="Please, review before submitting. Once sent, you will not be able to edit any information until this submission is completely reviewed by Liferay."
        />
      </div>

      <Section
        label="App Submission"
        tooltip="More info"
        tooltipText="More Info"
      >
        <div className="review-and-submit-app-page-card-container">
          <div className="review-and-submit-app-page-card-header">
            <div className="review-and-submit-app-page-card-header-left-content">
              <div className="review-and-submit-app-page-card-header-icon-container">
                <img src={aCoLibraries} alt="Document Icon" />
              </div>

              <div className="review-and-submit-app-page-card-header-title">
                <span className="review-and-submit-app-page-card-header-title-text">
                  A&Co Libraries
                </span>
                <span className="review-and-submit-app-page-card-header-title-version">
                  v0.0.1
                </span>
              </div>
            </div>
          </div>

          <div className="review-and-submit-app-page-card-body">
            <CardSection
              paragraph="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor."
              sectionName="Description"
            />

            {initialReviewAndSubmitAppPageItems.map((item) => {
              if (item.section === "Categories") {
                return (
                  <CardSection sectionName="Categories" tags={item.tags} />
                );
              } else if (item.section === "Tags") {
                return <CardSection sectionName="Tags" tags={item.tags} />;
              } else if (item.section === "Build") {
                return (
                  <CardSection
                    build
                    sectionName="Build"
                    title={item.fileName}
                  />
                );
              } else if (item.section === "Pricing") {
                return (
                  <CardSection
                    icon={item.icon}
                    cardView
                    sectionName="Pricing"
                    cardTitle={item.title}
                    cardDescription={item.description}
                  />
                );
              } else if (item.section === "Licensing") {
                return (
                  <CardSection
                    icon={item.icon}
                    cardView
                    sectionName="Licensings"
                    cardTitle={item.title}
                    cardDescription={item.description}
                  />
                );
              } else if (item.section === "Storefront") {
                return (
                  <>
                    <CardSection
                      storefront
                      files={item.files}
                      sectionName="Storefront"
                    />
                    
                  </>
                );
              } else if (item.section === "Version") {
                return (
                  <CardSection
                    version={item.version}
                    description={item.description}
                    title={item.title}
                    sectionName="Version"
                  />
                );
              } else if (item.section === "Support & Help") {
                return (
                  <CardSection
                    cardLink
                    cardInfo={item.cardInfos}
                    sectionName="Support & Help"
                  />
                );
              } else if (item.section === "User Data Collection") {
                return (
                  <CardSection
                    cardLink
                    cardTags={item.cardTags}
                    sectionName="User Data Collection"
                  />
                );
              }
            })}
          </div>
        </div>
      </Section>

      <div className="review-and-submit-app-page-agreement">
        <Checkbox checked={false} onChange={() => {}}></Checkbox>
        <span>
          <span className="review-and-submit-app-page-agreement-highlight">
            {"Attention: this cannot be undone. "}
          </span>
          I am aware I cannot edit any data or information regarding this app
          submission until Liferay completes its review process and I agree with
          the Liferay Marketplace <a href="#">terms</a> and{" "}
          <a href="#">privacy</a>
        </span>
      </div>

      <NewAppPageFooterButtons
        showBackButton={true}
        onClickBack={() => onClickBack()}
        onClickContinue={() => onClickContinue()}
      />
    </div>
  );
}
