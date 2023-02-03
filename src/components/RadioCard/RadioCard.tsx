import classNames from 'classnames';

import radioChecked from '../../assets/icons/radio-button-checked.svg'
import radioUnchecked from '../../assets/icons/radio-button-unchecked.svg'

import './RadioCard.scss';
import { Tooltip } from '../Tooltip/Tooltip';

interface RadioCardProps {
    title: string;
    icon?: string;
    tooltip: string;
    description: string;
    selected: string;
    setSelected: (value: string) => void
    disabled?: boolean;
    value: string;
}

export function RadioCard({
    description,
    title,
    tooltip,
    icon,
    selected,
    setSelected,
    disabled = false,
    value
}: RadioCardProps) {
    return (
        <div className={classNames('radio-card-container', {
            "radio-card-container-selected": selected === value,
            "radio-card-container-disabled": disabled
        })}>
            <div className='radio-card-main-info'>
                <div className='radio-card-title'>
                    <button
                        className='radio-card-button'
                        onClick={() => setSelected(value)}
                    >
                        <img 
                            className='radio-card-button-icon'
                            src={selected === value ? radioChecked : radioUnchecked}  
                            alt={selected === value ? "Radio Checked" : "Radio unchecked"} 
                        />
                    </button>

                    <span 
                        className={classNames('radio-card-title-text', {
                            "radio-card-title-text-selected": selected === value
                        })}
                    >
                        {title}
                    </span>
                    <img 
                        className={classNames('radio-card-title-icon', {
                            'radio-card-title-icon-selected': selected === value
                        })} 
                        src={icon} 
                        alt="Upload fill" 
                    />
                </div>

                <div className='radio-card-title-tooltip'>
                    <Tooltip 
                        tooltip={tooltip}
                    />
                </div>
            </div>

            <span className='radio-card-description'>{description}</span>
        </div>
    );
}