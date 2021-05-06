import React from "react";
import {Container} from "../../containers/Container";
import {Title} from "../ui/Title";

type Props = {
    event: EventType;
}

export const EventView: React.FC<Props> = ({event}) => {
    return <>
        <Title>{event.title}</Title>
        <Title type="subheader">{event.description}</Title>
    </>
};
