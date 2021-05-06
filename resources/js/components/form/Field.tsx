import React from 'react';
import {FieldError} from "react-hook-form";
import clsx from 'clsx';

export type FieldProps = {
    name: string;
    label: string;
    error?: FieldError;
}

export const Field: React.FC<FieldProps> = ({name, label, error, children}) => {
    return <>
        <label
            htmlFor={`#${name}`}
            className={clsx(
                'pb-2', {
                    'text-red-500': error,
                    'text-gray-600': !error
                }
            )}
        >
            {label}
        </label>

        {children}

        {
            error &&
            <p className="text-sm text-red-500 font-medium tracking-tight">{error.message}</p>
        }
    </>
};
