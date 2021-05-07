import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useEventUpdate() {
    const queryClient = useQueryClient();

    return useMutation(
        (params: {id: Id, data: EventProperties}) => api.events.update(params.id, params.data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events')
            }
        }
    )
}
