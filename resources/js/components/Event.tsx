import React from "react";
import {ChevronRight} from "react-feather";
import {format, parseISO} from "date-fns";
import {Link} from "react-router-dom";

type Props = {
    event: EventType;
    to?: string;
}

export const Event: React.FC<Props> = ({event, to}) => {
    const {title, description, starts_at, ends_at} = event;

    const startsAt = parseISO(starts_at);
    const endsAt = parseISO(ends_at);

    return <Link
        to={to ?? '#'}
        className="duration-200 flex px-5 py-4 bg-white border rounded-lg cursor-pointer hover:shadow"
    >
        {/* Left panel */}
        <div className="flex flex-col pr-4 justify-center items-center border-r">
            {/* Day of week */}
            <div className="text-gray-500 tracking-tight">
                {format(startsAt, 'E')}
            </div>

            {/* Day of month */}
            <div className="text-4xl">
                {format(startsAt, 'd')}
            </div>
        </div>

        {/* Right panel */}
        <div className="px-4">
            <h2 className="text-lg font-medium">
                {title}
            </h2>

            {/* Start and end dates */}
            <span className="px-1 text-sm text-blue-500 bg-blue-100 border border-blue-500 rounded">
                {format(startsAt, 'E d, Y, HH:mm')} – {format(endsAt, 'E d, Y, HH:mm')}
            </span>

            {/* Description */}
            <p className="mt-3 text-gray-700 leading-5">
                {description}
            </p>
        </div>

        {/* Chevron decoration */}
        <div className="flex items-center">
            <ChevronRight className="text-gray-500"/>
        </div>
    </Link>
};
