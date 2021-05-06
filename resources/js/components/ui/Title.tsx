import clsx from "clsx";
import React from "react";

type Types = 'super';

type Props = {
    className?: string;
    type?: Types;
}

const classes: { [id in Types]: (params: Props) => string } = {
    super: () => `text-center text-5xl text-gray-800 font-black leading-none tracking-tighter`
};

export const Title: React.FC<Props> = (props) => {
    const {className = '', type = 'super', children} = props;

    return <h1
        className={clsx('', className, classes[type](props))}
    >
        {children}
    </h1>
};
