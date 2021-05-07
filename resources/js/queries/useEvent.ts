import {useQuery} from "react-query";
import {api} from "../api";

export function useEvent(id: Id) {
    return useQuery(
        ['event', id],
        () => api.events.show(id)
    )
}
