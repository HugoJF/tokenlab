import {useQuery} from "react-query";
import {api} from "../api";

export function useEvent(id: Id) {
    return useQuery(
        'events',
        () => api.events.show(id)
    )
}
