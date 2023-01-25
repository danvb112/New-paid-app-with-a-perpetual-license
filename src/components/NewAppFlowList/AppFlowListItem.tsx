import ClayIcon from '@clayui/icon';

import circleFill from '../../assets/icons/circle_fill.svg';
import checkFill from '../../assets/icons/check_fill.svg';

import './AppFlowListItem.scss'

interface AppFlowListItemProps {
    checked?: boolean;
    text: string;
}

export function AppFlowListItem({
    checked = false,
    text
}: AppFlowListItemProps) {
    return (
        <div className='app-flow-list-item-container'>
             <img 
                className={checked ?'app-flow-list-item-icon-checked' : 'app-flow-list-item-icon'} 
                src={checked ? checkFill : circleFill} alt={checkFill ? "check fill" : "circle fill"} />
            
            <li className={checked ? 'app-flow-list-item-text-checked' : 'app-flow-list-item-text' }>{text}</li> 
        </div>
    );
}