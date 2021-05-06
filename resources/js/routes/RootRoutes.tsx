import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Overlay} from "../containers/Overlay";
import {Register} from "../pages/auth/Register";
import {Login} from "../pages/auth/Login";
import {ProtectedRoute} from "./ProtectedRoute";
import {EventsContainer} from "../pages/events/EventsContainer";
import {EventCreateContainer} from "../pages/events/EventCreateContainer";
import {EventEditContainer} from "../pages/events/EventEditContainer";

export const RootRoutes: React.FC = () => {
    return <Overlay>
        <Switch>
            <Route path="/login" children={<Login/>}/>
            <Route path="/register" children={<Register/>}/>

            <ProtectedRoute exact path="/events" children={<EventsContainer/>}/>
            <ProtectedRoute path="/events/create" children={<EventCreateContainer/>}/>
            <ProtectedRoute path="/events/:id/edit" children={<EventEditContainer/>}/>

            <Redirect to="/login"/>
        </Switch>
    </Overlay>
};
