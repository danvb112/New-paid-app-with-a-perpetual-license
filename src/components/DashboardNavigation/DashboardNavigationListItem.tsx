import classNames from 'classnames';

import circleFill from '../../assets/icons/circle_fill.svg';

import './DashboardNavigationListItem.scss';

interface DashboardNavigationListItem {
    image: string;
    name: string;
    version: string;
    status: string;
}

export function DashboardNavigationListItem({
    image,
    name,
    version,
    status,
}: DashboardNavigationListItem) {
    return (
        <div className='dashboard-navigation-body-list-item'>
            <div>
                <img
                    className='dashboard-navigation-body-list-item-app-logo'
                    src={image}
                    alt="App Image"
                />
                <span className='dashboard-navigation-body-list-item-app-title'>{name}</span>
                <span className='dashboard-navigation-body-list-item-app-version'>{version}</span>
            </div>
            <img
                className={classNames('dashboard-navigation-body-list-item-app-status', {
                    'dashboard-navigation-body-list-item-app-status-hidden': status === 'Hidden',
                    'dashboard-navigation-body-list-item-app-status-pending': status === 'Pending',
                    'dashboard-navigation-body-list-item-app-status-published': status === 'Published',
                })}
                src={circleFill}
                alt="Circle fill"
            />
        </div>
    );
}