import { useNavigate } from 'react-router-dom';

import accountLogo from '../../assets/icons/mainAppLogo.svg';
import salesIcon from '../../assets/icons/sales-icon.svg';
import membersIcon from '../../assets/icons/person-fill.svg';
import accountIcon from '../../assets/icons/account-icon.svg';
import appsIcon from '../../assets/icons/apps-fill.svg';
import appIconTransport from '../../assets/icons/app-icon-transport.svg';
import appIconSales from '../../assets/icons/app-icon-sales.svg';
import appIconPayments from '../../assets/icons/app-icon-payments.svg';
import { AppProps, DashboardTable } from "../../components/DashboardTable/DashboardTable";
import { Header } from "../../components/Header/Header";

import { DashboardListItems, DashboardNavigation } from "../../components/DashboardNavigation/DashboardNavigation";
import { DashboardToolbar } from "../../components/DashboardToolbar/DashboardToolbar";
import { Footer } from "../../components/Footer/Footer";

import './DashboardPage.scss';

const appList: AppProps[] = [
    {
        image: appIconTransport,
        name: "A&Co Transport",
        rating: '4.3',
        status: 'Published',
        type: "SaaS",
        updatedBy: 'by Hanna White',
        updatedDate: "Feb 14, 2023",
        updatedResponsible: 'you',
        version: "1.40"
    },
    {
        image: appIconSales,
        name: "A&Co Sales",
        rating: '4.7',
        status: 'Pending',
        type: "OSGI",
        updatedBy: 'by Hanna White',
        updatedDate: "Feb 14, 2023",
        updatedResponsible: 'you',
        version: "2.28"
    },
    {
        image: appIconPayments,
        name: "A&Co Payments",
        rating: '4.1',
        status: 'Hidden',
        type: "OSGI",
        updatedBy: 'by Hanna White',
        updatedDate: "Feb 14, 2023",
        updatedResponsible: 'you',
        version: "1.0"
    },
];

const dashboardNavigationItems: DashboardListItems[] = [
    {
        itemIcon: appsIcon,
        itemTitle: "Apps",
        itemName: 'apps',
        items: appList,
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


export function DashboardPage() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-page-container">
            <div>
                <div className="dashboard-page-header-container">
                    <DashboardToolbar />
                </div>
                <div className="dashboard-page-body-container">
                    <DashboardNavigation
                        accountAppsNumber="4"
                        accountIcon={accountLogo}
                        accountTitle="Acme Co"
                        dashboardNavigationItems={dashboardNavigationItems}
                    />

                    <div>
                        <div className="dashboard-page-body-header-container">
                            <Header
                                title="Apps"
                                description="Manage and publish apps on the Marketplace"
                            />

                            <button
                                className="dashboard-page-body-header-button"
                                onClick={() => navigate("/create-new-app")}
                            >
                                + New App
                            </button>
                        </div>

                        <DashboardTable
                            apps={appList}
                        />

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}