import React from "react";
import useNavigation from "../../hooks/useNavigation";
import {Container} from "../../containers/Container";
import {useEvents} from "../../queries/useEvents";
import {Button} from "../../components/ui/Button";
import {Title} from "../../components/ui/Title";
import {Loading} from "../Loader";
import {EventsList} from "../../components/events/EventsList";
import {Pagination} from "../../components/ui/Pagination";
import usePagination from "../../hooks/usePagination";
import {Calendar} from "react-feather";

export const EventsContainer: React.FC<object> = () => {
    const {bindGo} = useNavigation();
    const pagination = usePagination();
    const events = useEvents(pagination.page);

    function handleOnPagination(page: number) {
        pagination.goToPage(page);
    }

    if (!events.data) {
        return <Loading/>
    }

    return <Container>
        <div className="flex flex-wrap justify-between">
            <Title>Eventos</Title>

            {/* Create event button */}
            <Button className="flex items-center space-x-2" onClick={bindGo('/events/create')}>
                <Calendar className="flex-shrink-0" size={24}/>
                <span>Novo evento</span>
            </Button>
        </div>

        <EventsList events={events.data.data.data}/>


        <Pagination
            current={pagination.page}
            max={events.data.data.meta.last_page}
            onPagination={handleOnPagination}
        />
    </Container>
};
