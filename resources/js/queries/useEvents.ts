import {useQuery} from "react-query";
import {api} from "../api";

export function useEvents() {
    return useQuery(
        'events',
        api.events.index
    )
}
