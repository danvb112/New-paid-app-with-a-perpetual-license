import { AppFlowListItem } from './AppFlowListItem';
import './AppFlowList.scss'


export function AppFlowList() {
    return (
        <div className='app-flow-list-container'>
            <ul className='app-flow-list-ul'>
                <AppFlowListItem text='Create' />
                <AppFlowListItem text='Profile' />
                <AppFlowListItem text='Build' />
                <AppFlowListItem text='Storefront' />
                <AppFlowListItem text='Version' />
                <AppFlowListItem text='Pricing' />
                <AppFlowListItem text='Licensing' />
                <AppFlowListItem text='Support' />
                <AppFlowListItem text='Privacy' />
                <AppFlowListItem text='Submit' />
            </ul>
        </div>
    );
}