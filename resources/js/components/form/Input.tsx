import React from 'react';
import {FieldError} from "react-hook-form";
import {Field} from "./Field";
import clsx from 'clsx';

export type InputProps = {
    name: string;
    label: string;
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    error?: FieldError;
    disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({name, label, disabled = false, inputProps, error}) => {
    return <Field name={name} label={label} error={error}>
        <input
            className={clsx(
                'transition-colors duration-500',
                'block w-full py-3 px-5 placeholder-gray-400 text-gray-700',
                'focus:outline-none focus:ring focus:shadow-sm',
                'border border-lg rounded-lg', {
                    'ring-red-200 border-red-500 ': error,
                    'ring-blue-200 focus:border-blue-500': !error,
                    'bg-gray-200 text-gray-500 rounded': disabled,
                    'bg-white text-black': !disabled,
                },
            )}
            id={name}
            name={name}
            disabled={disabled}
            {...inputProps}
        />
    </Field>
};
