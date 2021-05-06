import React from "react";
import useNavigation from "../../hooks/useNavigation";
import {Container} from "../../containers/Container";
import {Title} from "../../components/ui/Title";
import {EventForm} from "../../components/events/EventForm";
import {useCreateEvent} from "../../mutations/useCreateEvent";

export const EventCreateContainer: React.FC<object> = () => {
    const {go} = useNavigation();
    const createEvent = useCreateEvent();

    async function handleOnCreate(data: EventProperties) {
        try {
            await createEvent.mutateAsync(data);
            // TODO: redirect to event itself
            go('/events')
        } catch (e) {
            // TODO: get error bag
        }
    }

    return <Container>
        <Title>Registrando novo evento</Title>

        <EventForm onSubmit={handleOnCreate} action="Registrar"/>
    </Container>
};
