import {useQuery} from "react-query";
import {api} from "../api";

export function useEvents(page: number = 1) {
    return useQuery(
        ['events', page],
        () => api.events.index(page)
    )
}
