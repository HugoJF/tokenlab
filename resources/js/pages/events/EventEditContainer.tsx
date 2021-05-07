import React from "react";
import {Container} from "../../containers/Container";
import {Title} from "../../components/ui/Title";
import {EventForm} from "../../components/events/EventForm";
import {useParams} from "react-router";
import {useEvent} from "../../queries/useEvent";
import {Loading} from "../Loader";
import {useEventUpdate} from "../../mutations/useEventUpdate";
import useNavigation from "../../hooks/useNavigation";

export const EventEditContainer: React.FC<object> = () => {
    const {go} = useNavigation();
    const params = useParams<{ id: string }>();
    const event = useEvent(params.id);
    const eventUpdate = useEventUpdate();

    async function handleOnEdit(data: EventProperties) {
        await eventUpdate.mutateAsync({id: params.id, data: data});
        go('/events');
    }

    if (!event.data) {
        return <Loading/>
    }

    return <Container>
        <Title>Editando evento</Title>

        <EventForm
            event={event.data.data.data}
            onSubmit={handleOnEdit}
            action="Atualizar"
        />
    </Container>
};
