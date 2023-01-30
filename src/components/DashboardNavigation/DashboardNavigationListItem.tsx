import classNames from 'classnames';

import circleFill from '../../assets/icons/circle_fill.svg';

import './DashboardNavigationListItem.scss';

interface DashboardNavigationListItem {
    icon: string;
    title: string;
    version: string;
    status: string;
}

export function DashboardNavigationListItem({
    icon,
    title,
    version,
    status,
}: DashboardNavigationListItem) {
    return (
        <div className='dashboard-navigation-body-list-item'>
        <div>
            <img
                className='dashboard-navigation-body-list-item-app-logo' 
                src={icon} 
                alt="App Icon" 
            />
            <span className='dashboard-navigation-body-list-item-app-title'>{title}</span>
            <span className='dashboard-navigation-body-list-item-app-version'>{version}</span>
        </div>
        <img
            className={classNames('dashboard-navigation-body-list-item-app-status', {
                'dashboard-navigation-body-list-item-app-status-hidden': status === 'hidden',
                'dashboard-navigation-body-list-item-app-status-pending': status === 'pending',
                'dashboard-navigation-body-list-item-app-status-published': status === 'published',
            })} 
            src={circleFill} 
            alt="Circle fill" 
        />
    </div>
    );
}