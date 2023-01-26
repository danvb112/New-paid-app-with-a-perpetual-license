
import {  ReactNode } from 'react';
import {FieldBase} from '../FieldBase';
import './Section.scss';

interface SectionProps {
    children: ReactNode;
}

export function Section({children}: SectionProps) {
    return(
        <FieldBase
            label='App Info'
            tooltip='More Info'
            tooltipText='More Info'
        >
            <div className='section-divider'></div>

            {children}
        </FieldBase>
    );
}