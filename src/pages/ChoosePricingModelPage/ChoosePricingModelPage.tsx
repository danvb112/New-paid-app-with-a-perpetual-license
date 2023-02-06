import { Header } from "../../components/Header/Header"
import { RadioCard } from "../../components/RadioCard/RadioCard"
import { Section } from "../../components/Section/Section"

import creditCardIcon from '../../assets/icons/credit-card.svg';
import brightnessEmptyIcon from '../../assets/icons/brightness-empty.svg';


import "./ChoosePricingModelPage.scss"
import { useState } from "react";
import { NewAppPageFooterButtons } from "../../components/NewAppPageFooterButtons/NewAppPageFooterButtons";

interface ChoosePricingModelPageProps {
    onClickBack: () => void;
    onClickContinue: () => void;
}

export function ChoosePricingModelPage({
    onClickBack,
    onClickContinue
}: ChoosePricingModelPageProps) {
    const [pricingModel, setPricingModel] = useState('free');

    return (
        <div className="choose-pricing-model-page-container">
            <Header
                title="Choose pricing model"
                description="Select one of the pricing models for your app. This will define how much users will pay and their acquisition experience."
            />

            <Section
                label="App Price"
                required
                tooltip="More Info"
                tooltipText="More Info"
            >
                <div className="choose-pricing-model-page-radio-container">
                    <RadioCard
                        description="The app is offered in the Marketplace with no charge."
                        selected={pricingModel}
                        setSelected={setPricingModel}
                        title="FREE"
                        tooltip="More Info"
                        value="free"
                        icon={brightnessEmptyIcon}
                    />

                    <RadioCard
                        disabled
                        description="To enable paid apps, you must be a business and enter payment information in your Marketplace account profile."
                        selected={pricingModel}
                        setSelected={setPricingModel}
                        title="Paid"
                        tooltip="More Info"
                        value="paid"
                        icon={creditCardIcon}
                    />
                </div>
            </Section>


            <NewAppPageFooterButtons
                onClickBack={() => onClickBack()}
                onClickContinue={() => onClickContinue()}
            />
        </div>
    )
}