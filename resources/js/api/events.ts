import {bxios} from "../bxios";

export const events = {
    index: (page: number) => bxios()
        .get('events')
        .setCustom({params: {page}})
        .send<PaginatedResourceResponse<EventType[]>>(),
    show: (id: Id) => bxios()
        .get('events', id)
        .send<ResourceResponse<EventType>>(),
    store: (data: EventProperties) => bxios()
        .post('events')
        .body(data)
        .send<ResourceResponse<EventType>>(),
    update: (id: Id, data: EventProperties) => bxios()
        .patch('events', id)
        .body(data)
        .send<ResourceResponse<EventType>>(),
    join: (id: Id) => bxios()
        .post('events', id, 'join')
        .send<ResourceResponse<EventType>>(),
    leave: (id: Id) => bxios()
        .delete('events', id, 'leave')
        .send<ResourceResponse<EventType>>(),
    destroy: (id: Id) => bxios()
        .delete('events', id)
        .send<ResourceResponse<EventType>>(),
};
