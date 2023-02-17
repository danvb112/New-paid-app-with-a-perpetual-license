import { useEffect, useState } from "react";

import aCoLibraries from "../../assets/images/a&co-libraries.svg";
import { Header } from "../../components/Header/Header";
import { NewAppPageFooterButtons } from "../../components/NewAppPageFooterButtons/NewAppPageFooterButtons";
import { Section } from "../../components/Section/Section";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { useAppContext } from "../../manage-app-state/AppManageState";
import { TYPES } from "../../manage-app-state/actionTypes";
import { CardSection } from "./CardSection";
import { initialReviewAndSubmitAppPageItems } from "./ReviewAndSubmitAppPageUtil";
import {
  getProduct,
  getProductImages,
  getProductSKU,
  getProductSpecifications,
} from "../../utils/api";
import "./ReviewAndSubmitAppPage.scss";

interface ReviewAndSubmitAppPageProps {
  onClickBack: () => void;
  onClickContinue: () => void;
  readonly?: boolean;
}

type Product = {
  name: string;
  description: string;
};

export function ReviewAndSubmitAppPage({
  readonly = false,
  onClickBack,
  onClickContinue,
}: ReviewAndSubmitAppPageProps) {
  const [{ appERC, appLogo, priceModel, appProductId }, dispatch] =
    useAppContext();
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const [notes, setNotes] = useState("");
  const [appLicense, setAppLicense] = useState("");
  const [logo, setLogo] = useState("");
  const [price, setPrice] = useState('');

  useEffect(() => {
    const getData = async () => {
      const productResponse = await getProduct({
        appERC,
      });

      console.log(appLogo.fileName);
      const skuResponse = await getProductSKU({
        appProductId,
      });

      setPrice(skuResponse.items[0].price);

      const productSpecificationsResponse = await getProductSpecifications({
        appProductId,
      });

      const productImages = await getProductImages({ appProductId });

      const productAppLogo = productImages.items.find(
        (item: { title: { [key: string]: string } }) =>
          item.title["en_US"] === appLogo.fileName
      );

      setLogo(productAppLogo.src.replace("?download=true", ""));

      setName(productResponse.name["en_US"]);
      setDescription(productResponse.description["en_US"]);

      productSpecificationsResponse.items.map(
        (specification: {
          specificationKey: string;
          value: { [key: string]: string };
        }) => {
          const { specificationKey, value } = specification;
          const localizedValue = value["en_US"];

          if (specificationKey === "version") {
            setVersion(localizedValue);
          } else if (specificationKey === "notes") {
            setNotes(localizedValue);
          } else if (specificationKey === "app-license") {
            setAppLicense(localizedValue);
          }
        }
      );
    };

    getData();
  }, []);

  return (
    <div className="review-and-submit-app-page-container">
      {!readonly && (
        <div className="review-and-submit-app-page-header">
          <Header
            title={"Review and submit app"}
            description="Please, review before submitting. Once sent, you will not be able to edit any information until this submission is completely reviewed by Liferay."
          />
        </div>
      )}

      <Section
        disabled={readonly}
        label={!readonly ? "App Submission" : ""}
        required
        tooltip={!readonly ? "More info" : ""}
        tooltipText={!readonly ? "More Info" : ""}
      >
        <div className="review-and-submit-app-page-card-container">
          {!readonly && (
            <div className="review-and-submit-app-page-card-header">
              <div className="review-and-submit-app-page-card-header-left-content">
                <div className="review-and-submit-app-page-card-header-icon-container">
                  {/* <object type="image/svg+xml" data={logo}> */}
                    <img style={{
                        backgroundImage: `url(${logo})`,
                    }} alt="Document Icon" />
                  {/* </object> */}
                </div>

                <div className="review-and-submit-app-page-card-header-title">
                  <span className="review-and-submit-app-page-card-header-title-text">
                    {name}
                  </span>
                  <span className="review-and-submit-app-page-card-header-title-version">
                    {version}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="review-and-submit-app-page-card-body">
            <CardSection
              localized
              enableEdit={!readonly}
              paragraph={description}
              required
              sectionName="Description"
            />

            {initialReviewAndSubmitAppPageItems.map((item) => {
              const cardTitle = () => {
                if (item.section === "Pricing") return priceModel;
                else if (item.section === "Licensing") return appLicense;
                else if (item.section === "Version") return item.title;
              };

              const cardDescription = () => {
                if (item.section === "Pricing") {
                  if (priceModel === "free") {
                    return "The app is offered in the Marketplace with no charge.";
                  } else {
                    return "To enable paid apps, you must be a business and enter payment information in your Marketplace account profile.";
                  }
                } else return item.description;
              };

              const description = () => {
                if (item.section === "Version") return notes;
                else return item.description;
              };

              return (
                <CardSection
                  build={item.section === "Build"}
                  cardDescription={cardDescription()}
                  cardInfo={item.cardInfos}
                  cardLink={item.section === "Support & Help"}
                  cardTags={item.cardTags}
                  cardTitle={cardTitle()}
                  cardView={
                    item.section === "Pricing" || item.section === "Licensing"
                  }
                  description={description()}
                  enableEdit={!readonly}
                  files={item.files}
                  icon={item.icon}
                  price={price}
                  required
                  sectionName={item.section}
                  storefront={item.section === "Storefront"}
                  tags={item.tags}
                  title={item.section === "Build" ? item.fileName : item.title}
                  version={item.section === "Version" ? version : null}
                />
              );
            })}
          </div>
        </div>
      </Section>

      {!readonly && (
        <div className="review-and-submit-app-page-agreement">
          <Checkbox
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          ></Checkbox>
          <span>
            <span className="review-and-submit-app-page-agreement-highlight">
              {"Attention: this cannot be undone. "}
            </span>
            I am aware I cannot edit any data or information regarding this app
            submission until Liferay completes its review process and I agree
            with the Liferay Marketplace <a href="#">terms</a> and{" "}
            <a href="#">privacy</a>
          </span>
        </div>
      )}

      {!readonly && (
        <NewAppPageFooterButtons
          continueButtonText="Submit App"
          disableContinueButton={!checked}
          showBackButton={true}
          onClickBack={() => onClickBack()}
          onClickContinue={() => {
            dispatch({
              type: TYPES.SUBMIT_APP,
            });

            onClickContinue();
          }}
        />
      )}
    </div>
  );
}
