import React from "react";
import {Container} from "../../containers/Container";
import {Title} from "../../components/ui/Title";
import {EventForm} from "../../components/events/EventForm";
import {useParams} from "react-router";
import {useEvent} from "../../queries/useEvent";
import {Loading} from "../Loader";

export const EventEditContainer: React.FC<object> = () => {
    const params = useParams<{ id: string }>();
    const event = useEvent(params.id);

    function handleOnEdit(data: EventProperties) {
        alert(JSON.stringify(data));
    }

    if (!event.data) {
        return <Loading/>
    }

    return <Container>
        <Title>Editando evento</Title>

        <EventForm
            event={event.data.data.data}
            onSubmit={handleOnEdit}
            action="Registrar"
        />
    </Container>
};
