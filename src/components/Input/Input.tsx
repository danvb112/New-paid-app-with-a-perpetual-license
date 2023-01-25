import {ClayInput} from '@clayui/form';
import { FieldBase } from "../FieldBase";

import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    component: 'input' | 'textarea';
    label: string;
    required?: boolean;
    tooltip?: string;
    value?: string;
    type?: 'number' | 'textarea' | 'text' | 'date';
}

export function Input({
    component,
    label,
    placeholder,
    required,
    tooltip,
    onChange,
    value,
    type,
    ...otherProps
}: InputProps) {
    return (
        <FieldBase 
            className='input-form-base' 
            label={label}
            required={required}
            tooltip={tooltip}
        >
            <ClayInput 
                component={component}
                className='custom-input'
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                {...otherProps}
                value={value}
            />
        </FieldBase>
    );
}