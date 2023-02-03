import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { AppFlowList } from '../../components/NewAppFlowList/AppFlowList';
import { NewAppToolBar } from '../../components/NewAppToolBar/NewAppToolBar';
import { CreateNewAppPage } from '../CreateNewAppPage/CreateNewAppPage';
import { initialFLowListItems } from './AppCreationFlowUtil';

import './AppCreationFlow.scss';

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

                            setCurrentFlow('profile');
                        }}
                    />
                )}
            </div>

            <Footer />
        </div>
    )
}