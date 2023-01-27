import {ClayTooltipProvider} from '@clayui/tooltip';

import './Tooltip.scss';

interface TooltipProps {
    tooltip?: string;
    tooltipText?: string;
    helpFillIcon?: string;
}

export function Tooltip({
    helpFillIcon,
    tooltip,
    tooltipText
}: TooltipProps) {
    return (
        <ClayTooltipProvider>
            <div className='tooltip-base-container'>
                <div className='tooltip-container' data-tooltip-align="top" title={tooltip}>
                    <span className='tooltip-optional-text'>{tooltipText}</span> 
                    <img className='tooltip-icon'src={helpFillIcon} />
                </div>
            </div>
        </ClayTooltipProvider>
    );
}