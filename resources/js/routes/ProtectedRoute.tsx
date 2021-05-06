import React from "react";
import {Redirect, Route} from "react-router-dom";
import {RouteComponentProps, RouteProps} from "react-router";
import {useAuthContext} from "../hooks/useAuthContext";

export const ProtectedRoute: React.FC<RouteProps> = ({children, ...rest}) => {
    const auth = useAuthContext();

    function routeRender({location}: RouteComponentProps) {
        if (auth === null) {
            return <Redirect
                to={{
                    pathname: "/login",
                    state: {from: location}
                }}
            />
        }

        return <>{children}</>
    }

    return (
        <Route
            {...rest}
            render={routeRender}
        />
    );
};
