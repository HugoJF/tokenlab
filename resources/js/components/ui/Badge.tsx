import React from 'react';
import {Icon} from "react-feather";

type Props = {
    icon?: Icon;
}

export const Badge: React.FC<Props> = ({icon: Icon, children}) => {
    return <div className="px-1 flex items-center text-sm text-blue-500 bg-blue-100 border border-blue-500 rounded">
        {Icon && <Icon className="mr-1 flex-shrink-0" size={14}/>}
        {children}
    </div>
};
