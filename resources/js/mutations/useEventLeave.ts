import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useEventLeave() {
    const queryClient = useQueryClient();

    return useMutation(
        (id: Id) => api.events.leave(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events')
            }
        }
    )
}
