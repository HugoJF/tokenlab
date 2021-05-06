import React, {useMemo, useState} from 'react';
import clsx from "clsx";

type Props = {
    name: string;
    color?: Color;
}

type Color = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
const keys = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

const classes: { [id in Color]: (params: Props) => string } = {
    gray: () => `bg-gray-500`,
    red: () => `bg-red-500`,
    yellow: () => `bg-yellow-500`,
    green: () => `bg-green-500`,
    blue: () => `bg-blue-500`,
    indigo: () => `bg-indigo-500`,
    purple: () => `bg-purple-500`,
    pink: () => `bg-pink-500`,
};

function random(list: any[]) {
    const index = Math.floor(Math.random() * list.length);

    return list[index];
}

export const Head: React.FC<Props> = (props) => {
    const {name, color} = props;
    const [selectedColor] = useState<Color>(color ?? random(keys));

    const initials = useMemo(() => {
        const parts = name.split(' ');
        const letters = parts.map(part => part.substr(0, 1));
        return letters.join('').substr(0, 2);
    }, [name]);

    return <div
        title={name}
        className={clsx(
            'duration-150 w-6 h-6 flex items-center justify-center',
            'text-xs text-white font-normal rounded-full',
            'uppercase shadow-sm',
            classes[selectedColor](props)
        )}
    >
        {initials}
    </div>
};
