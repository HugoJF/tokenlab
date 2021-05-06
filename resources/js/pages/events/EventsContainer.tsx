import React from "react";
import useNavigation from "../../hooks/useNavigation";
import {Container} from "../../containers/Container";
import {useEvents} from "../../queries/useEvents";
import {Button} from "../../components/ui/Button";
import {Title} from "../../components/ui/Title";
import {Loading} from "../Loader";
import {EventsList} from "../../components/events/EventsList";

export const EventsContainer: React.FC<object> = () => {
    const {bindGo} = useNavigation();
    const events = useEvents();

    if (!events.data) {
        return <Loading/>
    }

    return <Container>
        <Title>Eventos</Title>

        <EventsList events={events.data.data.data}/>

        {/* Create event button */}
        <Button className="mt-4" onClick={bindGo('/events/create')}>
            Registrar evento
        </Button>
    </Container>
};
