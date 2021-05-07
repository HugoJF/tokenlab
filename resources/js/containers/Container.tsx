import React from 'react';
import clsx from "clsx";
import {ChevronLeft, LogOut, User} from "react-feather";
import {useAuthContext} from "../hooks/useAuthContext";
import useNavigation from "../hooks/useNavigation";
import {useLogout} from "../mutations/useLogout";

type Props = {
    className?: string;
}

export const Container: React.FC<Props> = ({className = '', children}) => {
    const {goBack} = useNavigation();
    const auth = useAuthContext();
    const logout = useLogout();

    function handleGoBack() {
        goBack()
    }

    function handleLogout() {
        logout.mutate();
    }

    return <>
        {/* Header */}
        {auth && <header className="flex justify-between px-8 py-6 mb-4 text-white bg-gray-900 shadow-lg">
            {/* Go back */}
            <div onClick={handleGoBack} className="px-3 cursor-pointer">
                <ChevronLeft onClick={handleGoBack}/>
            </div>

            {/* Authed user */}
            <div className="flex items-center space-x-1">
                <User/>
                <span>{auth.name}</span>
            </div>

            {/* Logout */}
            <div onClick={handleLogout} className="px-3 cursor-pointer">
                <LogOut/>
            </div>
        </header>}

        {/* Children */}
        <main className={clsx('flex-grow flex flex-col px-4 pb-8 container mx-auto', className)}>
            {children}
        </main>
    </>
};
