import React from "react";
import useNavigation from "../../hooks/useNavigation";
import {Container} from "../../containers/Container";
import {useEvents} from "../../queries/useEvents";
import {Button} from "../../components/ui/Button";
import {Title} from "../../components/ui/Title";
import {Event} from "../../components/Event";
import {Loading} from "../Loader";

export const EventsContainer: React.FC<object> = () => {
    const {bindGo} = useNavigation();
    const events = useEvents();

    if (!events.data) {
        return <Loading/>
    }

    return <Container>
        <Title>Eventos</Title>

        {/* Empty screen */}
        {events.data.data.data.length === 0 && <div className="mt-4 flex flex-col items-center space-y-4">
            <Title type="subheader">
                Nenhum evento foi registrado ainda!
            </Title>
        </div>}

        {/* Events */}
        <div className="mt-4 grid grid-cols-2 gap-4">
            {events.data.data.data.map(event => <Event
                key={event.id}
                event={event}
            />)}
        </div>

        {/* Create event button */}
        <Button className="mt-4" onClick={bindGo('/events/create')}>
            Registrar evento
        </Button>
    </Container>
};
