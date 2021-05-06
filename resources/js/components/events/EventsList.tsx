import React from "react";
import {Title} from "../ui/Title";
import {Event} from "./Event";

type Props = {
    events: EventType[];
}

export const EventsList: React.FC<Props> = ({events}) => {
    return <>
        {/* Empty screen */}
        {events.length === 0 && <div className="mt-4 flex flex-col items-center space-y-4">
            <Title type="subheader">
                Nenhum evento foi registrado ainda!
            </Title>
        </div>}

        {/* Events */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map(event => <Event
                key={event.id}
                event={event}
            />)}
        </div>
    </>
};
