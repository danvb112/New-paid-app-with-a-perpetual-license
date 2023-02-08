import { Header } from "../../components/Header/Header";
import { NewAppPageFooterButtons } from "../../components/NewAppPageFooterButtons/NewAppPageFooterButtons";
import { Section } from "../../components/Section/Section";
import { Tag } from "../../components/Tag/Tag";
import { CardView } from "../../components/Card/CardView";
import { CardLink } from "../../components/Card/CardLink";
import { CardTags } from "../../components/Card/CardTags";
import ClayButton from "@clayui/button";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import arrowDown from "../../assets/icons/arrow-down.svg";
import asteriskIcon from "../../assets/icons/asterisk.svg";

import {
  initialReviewAndSubmitAppPageItems,
  File,
} from "./ReviewAndSubmitAppPageUtil";

import "./ReviewAndSubmitAppPage.scss";

import documentIcon from "../../assets/icons/document-icon.svg";
import folderIcon from "../../assets/icons/folder-fill.svg";
import aCoLibraries from "../../assets/images/a&co-libraries.svg";
import { Checkbox } from "../../components/Checkbox/Checkbox";

interface ReviewAndSubmitAppPageProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

interface CardSectionProps {
  build?: boolean;
  cardInfo?: { title: string; link: string; icon: string }[];
  cardTitle?: string;
  files?: File[];
  cardDescription?: string;
  paragraph?: string;
  description?: string;
  title?: string;
  icon?: string;
  cardView?: boolean;
  cardLink?: boolean;
  cardTags?: { icon: string; title: string; tags: string[] }[];
  sectionName: string;
  storefront?: boolean;
  tags?: string[];
  version?: string;
}

function CardSection({
  build,
  cardInfo,
  cardTitle,
  cardDescription,
  files,
  paragraph,
  description,
  title,
  icon,
  cardView,
  cardLink,
  cardTags,
  sectionName,
  storefront,
  tags,
  version,
}: CardSectionProps) {
  return (
    <div className="review-and-submit-app-page-card-body-section">
      <div className="review-and-submit-app-page-card-body-section-header">
        <span className="review-and-submit-app-page-card-body-section-header-title">
          {sectionName}
        </span>

        <div className="review-and-submit-app-page-card-body-section-header-actions">
          <div className="field-base-localized-field">
            <ClayButton displayType={null}>
              {"English (US)"}
              <img className="arrow-down-icon" src={arrowDown} />
            </ClayButton>

            <>
              &nbsp;
              <Tooltip tooltip={"choose a language"} />
            </>
          </div>

          <ClayButton className="edit-button" displayType={null}>
            {"Edit"}
          </ClayButton>
        </div>
      </div>

      {tags && (
        <div className="review-and-submit-app-page-card-body-section-tags">
          {tags.map((tag) => {
            return <Tag label={tag}></Tag>;
          })}
        </div>
      )}

      {paragraph && (
        <p className="review-and-submit-app-page-card-body-section-paragraph">
          {paragraph}
        </p>
      )}

      {build && (
        <div className="review-and-submit-app-page-card-body-section-file">
          <div className="review-and-submit-app-page-card-body-section-file-container">
            <img
              className="review-and-submit-app-page-card-body-section-file-container-icon"
              src={folderIcon}
              alt="Folder Icon"
            />
          </div>
          <img
            className="review-and-submit-app-page-card-body-section-file-icon"
            src={documentIcon}
            alt="Document Icon"
          />
          <span className="review-and-submit-app-page-card-body-section-file-name">
            {title}
          </span>
        </div>
      )}

      {cardView && (
        <CardView
          icon={icon}
          title={cardTitle as string}
          description={cardDescription as string}
        />
      )}

      {storefront && (
        <div>
          {files?.map(({ fileDescription, fileName, image }) => {
            return (
              <div className="review-and-submit-app-page-card-body-section-files">
                <div className="review-and-submit-app-page-card-body-section-files-container">
                  <img src={image} alt={fileName} />
                </div>
                <div className="review-and-submit-app-page-card-body-section-files-data">
                  <img
                    className="review-and-submit-app-page-card-body-section-files-data-icon"
                    src={documentIcon}
                    alt={fileName}
                  />
                  <span className="review-and-submit-app-page-card-body-section-files-data-name">
                    {fileName}
                  </span>
                  <span className="review-and-submit-app-page-card-body-section-files-data-description">
                    {fileDescription}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="review-and-submit-app-page-card-body-section-files-info">
                      {"Important: Images will be displayed following the numerical order above"}
                    </div>
        </div>
      )}

      {version && (
        <div className="review-and-submit-app-page-card-body-section-version">
          <div className="review-and-submit-app-page-card-body-section-version-container">
            <div className="review-and-submit-app-page-card-body-section-version-container-icon">
              {version}
            </div>
          </div>
          <div className="review-and-submit-app-page-card-body-section-version-data">
            <span className="review-and-submit-app-page-card-body-section-version-data-name">
              {title}
            </span>
            <span className="review-and-submit-app-page-card-body-section-version-data-description">
              {description}
            </span>
          </div>
        </div>
      )}

      {cardLink &&
        cardInfo?.map(({ icon, link, title }) => {
          return (
            <CardLink
              icon={icon}
              title={title as string}
              description={link as string}
            />
          );
        })}

      {cardTags &&
        cardTags?.map(({ icon, tags, title }) => {
          return <CardTags icon={icon} title={title as string} tags={tags} />;
        })}
    </div>
  );
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
