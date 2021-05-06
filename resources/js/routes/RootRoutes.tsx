import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Overlay} from "../containers/Overlay";
import {Register} from "../pages/auth/Register";
import {Login} from "../pages/auth/Login";
import {Events} from "../pages/auth/Events";

export const RootRoutes: React.FC = () => {
    return <Overlay>
        <Switch>
            <Route path="/login" children={<Login/>}/>
            <Route path="/register" children={<Register/>}/>
            <Route path="/events" children={<Events/>}/>

            <Redirect to="/login"/>
        </Switch>
    </Overlay>
};