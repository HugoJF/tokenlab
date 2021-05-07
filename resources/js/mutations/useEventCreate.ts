import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useEventCreate() {
    const queryClient = useQueryClient();

    return useMutation(
        (data: EventProperties) => api.events.store(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events')
            }
        }
    )
}
