import ClayButton from '@clayui/button';

import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUP from '../../assets/icons/arrow-up.svg';

import { useState } from 'react';

import { DashboardNavigationList } from './DashboardNavigationList';

import './DashboardNavigation.scss';
import { AppProps } from '../DashboardTable/DashboardTable';
export interface DashboardListItems {
    itemIcon: string
    itemTitle: string;
    itemName: string;
    items?: AppProps[];
    itemSelected: boolean;
}

interface DashboardNavigationProps {
    accountIcon: string;
    accountTitle: string;
    accountAppsNumber: string;
    dashboardNavigationItems: DashboardListItems[]
}

export function DashboardNavigation({
    accountAppsNumber,
    accountIcon,
    accountTitle,
    dashboardNavigationItems,
}: DashboardNavigationProps) {
    const [expandList, setExpandList] = useState(true);
    const [navigationItems, setNavigationItems] = useState<DashboardListItems[]>(dashboardNavigationItems);

    return (
        <div className='dashboard-navigation-container'>
            <div className='dashboard-navigation-header'>
                <div className='dashboard-navigation-header-left-content'>
                    <img
                        className='dashboard-navigation-header-logo'
                        src={accountIcon}
                        alt="account logo"
                    />
                    <div className='dashboard-navigation-header-text-container'>
                        <span className='dashboard-navigation-header-title'>{accountTitle}</span>
                        <span className='dashboard-navigation-header-apps'>{accountAppsNumber} apps</span>
                    </div>
                </div>
                <ClayButton
                    onClick={() => setExpandList(!expandList)}
                    displayType='unstyled'
                >
                    <img
                        className='dashboard-navigation-header-arrow-down'
                        src={expandList ? arrowUP : arrowDown}
                        alt="Arrow Down"
                    />
                </ClayButton>
            </div>

            {expandList && (
                <div className='dashboard-navigation-body'>
                    {navigationItems.map(navigationMock => (
                        <DashboardNavigationList
                            key={navigationMock.itemName}
                            navigationItemMock={navigationMock}
                            navigationItemsMock={navigationItems}
                            onItemsChange={setNavigationItems}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}