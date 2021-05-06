import {bxios} from "../bxios";

export const events = {
    index: () => bxios()
        .get('events')
        .send<ResourceResponse<EventType[]>>(),
};
