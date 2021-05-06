import React, {useEffect, useState} from 'react';
import {useMe} from "../queries/useMe";
import useNavigation from "../hooks/useNavigation";
import {Loading} from "../pages/Loader";

export const AuthContext = React.createContext<UserType | null>(null);

export const Overlay: React.FC = ({children}) => {
    const [authed, setAuthed] = useState<UserType | null>(null);
    const {go} = useNavigation();
    const me = useMe();

    useEffect(() => {
        if (me.isFetched && me?.data?.data?.email) {
            setAuthed(me.data.data);
        } else {
            setAuthed(null);
            go('/login');
        }
    }, [me]);

    // Only show loading in the first fetch
    const firstFetch = me.isFetching && !me.isFetched;

    return <AuthContext.Provider value={authed}>
        {firstFetch ? <Loading/> : <>{children}</>}
    </AuthContext.Provider>
};
