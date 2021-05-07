import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useEventDelete() {
    const queryClient = useQueryClient();

    return useMutation(
        (id: Id) => api.events.destroy(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events')
            }
        }
    )
}
