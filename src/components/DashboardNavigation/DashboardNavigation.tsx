import ClayButton from '@clayui/button';

import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUP from '../../assets/icons/arrow-up.svg';

import salesIcon from '../../assets/icons/sales-icon.svg';
import membersIcon from '../../assets/icons/person-fill.svg';
import accountIcon from '../../assets/icons/account-icon.svg';
import appsIcon from '../../assets/icons/apps-fill.svg';

import {useState} from 'react';

import { DashboardNavigationList } from './DashboardNavigationList';

import './DashboardNavigation.scss';

export type ListItem = {
    icon: string;
    title: string;
    version: string;
    status: string;
}

export interface DashboardListItems {
    itemIcon: string
    itemTitle: string;
    itemName: string;
    items?: ListItem[];
    itemSelected: boolean;
}

const initialItemsMock: DashboardListItems[] = [
    {
        itemIcon: appsIcon,
        itemTitle: "Apps",
        itemName: 'apps',
        items: [],
        itemSelected: false
    },
    {
        itemIcon: salesIcon,
        itemTitle: "Sales",
        itemName: 'sales',
        itemSelected: false
    },
    {
        itemIcon: membersIcon,
        itemTitle: "Members",
        itemName: 'members',
        itemSelected: false
    },
    {
        itemIcon: accountIcon,
        itemTitle: "Account",
        itemName: 'account',
        itemSelected: false
    },
]

interface DashboardNavigationProps {
    accountIcon: string;
    accountTitle: string;
    accountAppsNumber: string;
}

export function DashboardNavigation({
    accountAppsNumber,
    accountIcon,
    accountTitle,
}: DashboardNavigationProps) {
    const [expandList, setExpandList] = useState(true);
    const [navigationItemsMock, setNavigationItemsMock] = useState<DashboardListItems[]>(initialItemsMock);

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
                    {navigationItemsMock.map(navigationMock => (
                        <DashboardNavigationList
                            key={navigationMock.itemName}
                            navigationItemMock={navigationMock}
                            navigationItemsMock={navigationItemsMock}
                            onItemsChange={setNavigationItemsMock}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}