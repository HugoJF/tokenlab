import {bxios} from "../bxios";

export const events = {
    index: () => bxios()
        .get('events')
        .send<ResourceResponse<EventType[]>>(),
    show: (id: Id) => bxios()
        .get('events', id)
        .send<ResourceResponse<EventType>>(),
    store: (data: EventProperties) => bxios()
        .post('events')
        .body(data)
        .send<ResourceResponse<EventType>>(),
};
