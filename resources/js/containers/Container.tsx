import React from 'react';
import clsx from "clsx";

type Props = {
    className?: string;
}

export const Container: React.FC<Props> = ({className = '', children}) => {
    return <div className={clsx('py-8 flex-grow container mx-auto', className)}>
        {children}
    </div>
};
