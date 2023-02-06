import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { AppFlowList } from '../../components/NewAppFlowList/AppFlowList';
import { NewAppToolBar } from '../../components/NewAppToolBar/NewAppToolBar';
import { CreateNewAppPage } from '../CreateNewAppPage/CreateNewAppPage';
import { initialFLowListItems } from './AppCreationFlowUtil';

import './AppCreationFlow.scss';
import { ProvideAppBuildPage } from '../ProvideAppBuildPage/ProvideAppBuildPage';
import { CustomizeAppStorefrontPage } from '../StorefrontPage/CustomizeAppStorefrontPage';
import { ChoosePricingModelPage } from '../ChoosePricingModelPage/ChoosePricingModelPage';
import { InformLicensingTermsPage } from '../InformLicensingTermsPage/InformLicensingTermsPage';
import { ProvideVersionDetailsPage } from '../ProvideVersionDetailsPage/ProvideVersionDetailsPage';

type SetAppFlowListStateProps = {
    checkedItem?: string;
    selectedItem: string;
}

export function AppCreationFlow() {
    const [appFlowListItems, setAppFlowListItems] = useState(initialFLowListItems);
    const [currentFlow, setCurrentFlow] = useState('create');

    console.log(appFlowListItems);

    const setAppFlowListState = ({ checkedItem, selectedItem }: SetAppFlowListStateProps) => {
        const newAppFlowListItems = appFlowListItems.map(appItem => {
            if (appItem.name === checkedItem) {
                return {
                    ...appItem,
                    checked: true,
                    selected: false,
                }
            }

            if (appItem.name === selectedItem) {
                return {
                    ...appItem,
                    checked: false,
                    selected: true,
                }
            }

            return {
                ...appItem,
                checked: false,
                selected: false,
            }
        });

        setAppFlowListItems(newAppFlowListItems);
    }

    return (
        <div className='app-creation-flow-container'>
            <NewAppToolBar
                accountName='Acme Co.'
            />

            <div className='app-creation-flow-body'>
                <AppFlowList
                    appFlowListItems={appFlowListItems}
                />

                {currentFlow === 'create' && (
                    <CreateNewAppPage
                        onClickContinue={() => {
                            setAppFlowListState({
                                checkedItem: "create",
                                selectedItem: "profile"
                            });

                            setCurrentFlow('build');
                        }}
                    />
                )}

                {currentFlow === 'build' && (
                    <ProvideAppBuildPage
                        onClickBack={() => {
                            setAppFlowListState({
                                selectedItem: "profile"
                            });

                            setCurrentFlow('profile');
                        }}
                        onClickContinue={() => {
                            setAppFlowListState({
                                checkedItem: "build",
                                selectedItem: "storefront"
                            });

                            setCurrentFlow('storefront');
                        }}
                    />
                )}

                {currentFlow === 'storefront' && (
                    <CustomizeAppStorefrontPage
                        onClickBack={() => {
                            setAppFlowListState({
                                selectedItem: "build"
                            });

                            setCurrentFlow('build');
                        }}
                        onClickContinue={() => {
                            setAppFlowListState({
                                checkedItem: "storefront",
                                selectedItem: "version"
                            });

                            setCurrentFlow('version');
                        }}
                    />
                )}

                {currentFlow === 'version' && (
                    <ProvideVersionDetailsPage
                        onClickBack={() => {
                            setAppFlowListState({
                                checkedItem: "version",
                                selectedItem: "storefront"
                            });

                            setCurrentFlow('storefront');
                        }}
                        onClickContinue={() => {
                            setAppFlowListState({
                                checkedItem: "version",
                                selectedItem: "pricing"
                            });

                            setCurrentFlow('pricing');
                        }}
                    />
                )}

                {currentFlow === 'pricing' && (
                    <ChoosePricingModelPage
                        onClickBack={() => {
                            setAppFlowListState({
                                selectedItem: "version"
                            });

                            setCurrentFlow('version');
                        }}
                        onClickContinue={() => {
                            setAppFlowListState({
                                checkedItem: "pricing",
                                selectedItem: "licensing"
                            });

                            setCurrentFlow('licensing');
                        }}
                    />
                )}

                {currentFlow === 'licensing' && (
                    <InformLicensingTermsPage
                        onClickBack={() => {
                            setAppFlowListState({
                                selectedItem: "pricing"
                            });

                            setCurrentFlow('pricing');
                        }}
                        onClickContinue={() => {
                            setAppFlowListState({
                                checkedItem: "licensing",
                                selectedItem: "support"
                            });

                            setCurrentFlow('support');
                        }}
                    />
                )}
            </div>

            <Footer />
        </div>
    )
}