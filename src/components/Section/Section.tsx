
import {  ReactNode } from 'react';
import {FieldBase} from '../FieldBase';
import './Section.scss';

interface SectionProps {
    label?: string;
    tooltip?: string;
    tooltipText?: string;
    children: ReactNode;
}

export function Section({
    label,
    tooltip,
    tooltipText,
    children
}: SectionProps) {
    return(
        <FieldBase
            label={label}
            tooltip={tooltip}
            tooltipText={tooltipText}
        >
            <div className='section-divider'></div>

            {children}
        </FieldBase>
    );
}