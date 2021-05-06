import {bxios} from "../bxios";

export const events = {
    index: () => bxios()
        .post('login')
        .send<ResourceResponse<EventType[]>>(),
};
