import classNames from 'classnames';
import {ClayToggle} from '@clayui/form';

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
    setSelected: (value: string | boolean) => void
    disabled?: boolean;
    toggle?: boolean
    value: string;
}

export function RadioCard({
    description,
    title,
    toggle = false,
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
                    {toggle ? (
                        <ClayToggle 
                            onToggle={(toggleValue) => setSelected(toggleValue)}
                        />
                    ) : (
                        <button
                            className={classNames('radio-card-button', {
                                'radio-card-button-disabled': disabled === true
                            })}
                            onClick={() => disabled === false && setSelected(value)}
                        >
                            <img
                                className='radio-card-button-icon'
                                src={selected === value ? radioChecked : radioUnchecked}
                                alt={selected === value ? "Radio Checked" : "Radio unchecked"}
                            />
                        </button>
                    )}


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
                        alt="Icon"
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