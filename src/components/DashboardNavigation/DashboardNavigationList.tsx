import classNames from 'classnames';

import './DashboardNavigationList.scss'
import { DashboardNavigationListItem } from './DashboardNavigationListItem';
import { DashboardListItems } from './DashboardNavigation';


interface DashboardNavigationListProps {
    navigationItemsMock: DashboardListItems[];
    navigationItemMock: DashboardListItems;
    onItemsChange: (values: DashboardListItems[]) => void;
}

export function DashboardNavigationList({
    navigationItemsMock,
    navigationItemMock,
    onItemsChange,
}: DashboardNavigationListProps) {
    const { itemIcon, itemTitle, itemName, itemSelected, items } = navigationItemMock;

    return (
        <>
            <div
                className={classNames('dashboard-navigation-body-list', {
                    'dashboard-navigation-body-list-selected': itemSelected
                })}
                onClick={() => {
                    const newItems = navigationItemsMock.map(navigationItem => {
                        if (navigationItem.itemName === itemName) {
                            return {
                                ...navigationItem,
                                itemSelected: true
                            }
                        }

                        return {
                            ...navigationItem,
                            itemSelected: false
                        }

                    });

                    onItemsChange(newItems);
                }}
            >
                <img
                    className={classNames('dashboard-navigation-body-list-icon', {
                        'dashboard-navigation-body-list-icon-selected': itemSelected
                    })}
                    src={itemIcon}
                    alt="Apps icon"
                />
                <span
                    className={classNames('dashboard-navigation-body-list-text', {
                        'dashboard-navigation-body-list-text-selected': itemSelected
                    })}
                >
                    {itemTitle}
                </span>
            </div>

            {itemSelected && items?.map(item => (
                <DashboardNavigationListItem
                    key={item.name}
                    image={item.image}
                    name={item.name}
                    version={item.version}
                    status={item.status}
                />
            ))}
        </>
    );
}