/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

import ClayForm from '@clayui/form';
import {ClayTooltipProvider} from '@clayui/tooltip';
import classNames from 'classnames';
import {ReactNode} from 'react';

import helpFillIcon from '../assets/icons/help_fill.svg';
import asteriskIcon from '../assets/icons/asterisk.svg';

import './FieldBase.scss';

function RequiredMask() {
	return (
		<>
			<span className="field-base-required-asterisk">
				<img 
                    className="field-base-required-asterisk-icon" 
                    src={asteriskIcon} 
                />
			</span>

			<span className="hide-accessible sr-only">
				Mandatory
			</span>
		</>
	);
}

interface FieldBaseProps {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	errorMessage?: string;
	id?: string;
	label?: string;
	required?: boolean;
	tooltip?: string;
	warningMessage?: string;
}

export function FieldBase({
	children,
	className,
	disabled,
	errorMessage,
	id,
	label,
	required,
	tooltip,
	warningMessage,
}: FieldBaseProps) {
	return (
		<ClayForm.Group
			className={classNames(className, {
				'has-error': errorMessage,
				'has-warning': warningMessage && !errorMessage,
			})}
		>
			{label && (
				<label className={classNames({disabled})} htmlFor={id}>
					{label}

					{required && <RequiredMask />}
				</label>
			)}

			{tooltip && (
				<>
					&nbsp;
					<ClayTooltipProvider>
						<span className='field-base-tooltip-span' data-tooltip-align="top" title={tooltip}>
							<img className='field-base-tooltip-icon'src={helpFillIcon} />
						</span>
					</ClayTooltipProvider>
				</>
			)}

			{children}
		</ClayForm.Group>
	);
}
