import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useEventJoin() {
    const queryClient = useQueryClient();

    return useMutation(
        (id: Id) => api.events.join(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('events')
            }
        }
    )
}
