import './CheckboxDataCard.scss';

import helpFillIcon from '../../assets/icons/help_fill.svg';
import { Tooltip } from '../Tooltip/Tooltip';
import { Checkbox } from '../Checkbox/Checkbox';

interface CheckboxItem {
    checked: boolean;
    label?: string;
    description?: string;
}

interface CheckboxDataCardProps {
    title: string;
    icon: string;
    tooltip: string;
    tooltipText: string;
    checkboxItems: CheckboxItem[];
}

export function CheckboxDataCard({
    checkboxItems,
    icon,
    title,
    tooltip,
    tooltipText
}: CheckboxDataCardProps) {
    return (
        <div className='checkbox-data-card-container'>
            <div className='checkbox-data-card-left-info'>
                <div className='checkbox-data-card-left-info-group'>
                    <span className='checkbox-data-card-left-info-title'>{title}</span>
                    <img className='checkbox-data-card-left-info-icon' src={icon} alt='Person Fill'  />
                </div>

                <Tooltip 
                    tooltip={tooltip}
                    tooltipText={tooltipText}
                />
            </div>

            <div className='checkbox-data-card-checkbox-list-container'>
                {checkboxItems.map(checkboxItem => (
                    <Checkbox 
                        checked={checkboxItem.checked}
                        onChange={() => {}}
                        label={checkboxItem.label}
                        description={checkboxItem.description}
                    />
                ))}
            </div>
        </div>
    );
}