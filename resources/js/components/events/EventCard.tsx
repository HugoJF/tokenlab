import React from "react";
import {Calendar, Clock, Edit, Trash, User} from "react-feather";
import {format, formatDuration, intervalToDuration, parseISO} from "date-fns";
import {Link} from "react-router-dom";
import {Badge} from "../ui/Badge";
import {Head} from "../ui/Head";
import {Button} from "../ui/Button";
import {useAuthContext} from "../../hooks/useAuthContext";

type Props = {
    event: EventType;
    controls?: boolean;
    onEdit?: (event: EventType) => void;
    onDelete?: (event: EventType) => void;
    onJoin?: (event: EventType) => void;
    onLeave?: (event: EventType) => void;
}

export const EventCard: React.FC<Props> = ({event, controls = true, onEdit, onDelete, onJoin, onLeave}) => {
    const {title, description, starts_at, ends_at} = event;
    const auth = useAuthContext();

    const startsAt = parseISO(starts_at);
    const endsAt = parseISO(ends_at);

    function currentUserInEvent(): boolean {
        if (!auth) {
            return false;
        }

        return event.users.filter(user => user.id === auth.id).length > 0;
    }

    function handleOnEdit(e: React.MouseEvent<HTMLDivElement>) {
        onEdit && onEdit(event);
    }

    function handleOnDelete(e: React.MouseEvent<HTMLDivElement>) {
        onDelete && onDelete(event);
    }

    function handleOnJoin(e: React.MouseEvent<HTMLDivElement>) {
        onJoin && onJoin(event);
    }

    function handleOnLeave(e: React.MouseEvent<HTMLDivElement>) {
        onLeave && onLeave(event);
    }

    return <div
        className="group duration-200 flex px-5 py-5 bg-white border border-gray-200 hover:border-blue-300 rounded-lg hover:shadow-md"
    >
        {/* Left panel */}
        <div className="flex flex-col pr-4 justify-center items-center border-r">
            {/* Day of week */}
            <div className="text-gray-500 tracking-tight">
                {format(startsAt, 'E')}
            </div>

            {/* Day of month */}
            <div className="text-4xl font-bold">
                {format(startsAt, 'dd')}
            </div>
        </div>

        {/* Right panel */}
        <div className="px-4 flex flex-col flex-grow">
            <div className="w-full flex justify-between">
                <h2 className="text-lg font-medium">
                    {title}
                </h2>

                {controls && <div className="duration-150 group-hover:opacity-100 opacity-0 flex text-gray-400">
                    <div onClick={handleOnEdit} className="p-2 duration-200 hover:text-gray-500 cursor-pointer">
                        <Edit size={20}/>
                    </div>
                    <div onClick={handleOnDelete} className="p-2 duration-200 hover:text-gray-500 cursor-pointer">
                        <Trash size={20}/>
                    </div>
                </div>}
            </div>

            {/* Meta */}
            <div className="flex flex-col items-start md:flex-row md:space-x-1 space-y-1 md:space-y-0">
                <Badge title="Criado por" icon={User}>
                    {event.user.name}
                </Badge>
                <Badge title="Início do evento" icon={Calendar}>
                    {format(startsAt, 'E d, Y, HH:mm')}
                </Badge>
                <Badge title="Duração" icon={Clock}>
                    {formatDuration(intervalToDuration({
                        start: startsAt, end: endsAt,
                    }), {format: ['days', 'hours']})}
                </Badge>
            </div>

            {/* Users */}
            <div className="flex mt-2 space-x-1">
                {event.users.map(user => (
                    <Head name={user.name}/>
                ))}
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-700 leading-5">
                {description}
            </p>

            {/* Join event button */}
            {controls && !currentUserInEvent() && <div
                onClick={handleOnJoin}
                className="duration-100 group-hover:opacity-100 opacity-0 w-full mt-4 flex flex-col flex-grow justify-end"
            >
                <Button size="small">
                    Participar
                </Button>
            </div>}

            {/* Leave event button */}
            {controls && currentUserInEvent() && <div
                onClick={handleOnLeave}
                className="duration-100  w-full mt-2 flex flex-col flex-grow justify-end"
            >
                <Button color="danger" size="small">
                    Cancelar
                </Button>
            </div>}
        </div>
    </div>
};
