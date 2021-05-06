import {useContext} from "react";
import {AuthContext} from "../containers/Overlay";

export const useAuthContext = () => {
    return useContext(AuthContext);
};
