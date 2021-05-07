import React from "react";
import {Title} from "../ui/Title";
import {EventCard} from "./EventCard";
import {useEventJoin} from "../../mutations/useEventJoin";
import {useEventLeave} from "../../mutations/useEventLeave";
import {useEventDelete} from "../../mutations/useEventDelete";
import useNavigation from "../../hooks/useNavigation";

type Props = {
    events: EventType[];
}

export const EventsList: React.FC<Props> = ({events}) => {
    const {go} = useNavigation();
    const eventJoin = useEventJoin();
    const eventLeave = useEventLeave();
    const eventDelete = useEventDelete();

    function handleOnEdit(event: EventType) {
        go(`/events/${event.id}/edit`)
    }

    async function handleOnDelete(event: EventType) {
        await eventDelete.mutateAsync(event.id);
    }

    async function handleOnJoin(event: EventType) {
        await eventJoin.mutateAsync(event.id)
    }

    async function handleOnLeave(event: EventType) {
        await eventLeave.mutateAsync(event.id);
    }

    return <>
        {/* Empty screen */}
        {events.length === 0 && <div className="mt-4 flex flex-col items-center space-y-4">
            <Title type="subheader">
                Nenhum evento foi registrado ainda!
            </Title>
        </div>}

        {/* Events */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map(event => <EventCard
                key={event.id}
                event={event}
                onEdit={handleOnEdit}
                onJoin={handleOnJoin}
                onLeave={handleOnLeave}
                onDelete={handleOnDelete}
            />)}
        </div>
    </>
};
