import React from "react";
import {Container} from "../../containers/Container";
import {Title} from "../../components/ui/Title";
import {EventForm} from "../../components/events/EventForm";
import {useParams} from "react-router";
import {useEvent} from "../../queries/useEvent";
import {Loading} from "../Loader";
import {EventView} from "../../components/events/EventView";

export const EventViewContainer: React.FC<object> = () => {
    const params = useParams<{ id: string }>();
    const event = useEvent(params.id);

    if (!event.data) {
        return <Loading/>
    }

    return <Container>
        <EventView
            event={event.data.data.data}
        />
    </Container>
};
