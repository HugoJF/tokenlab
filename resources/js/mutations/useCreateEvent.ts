import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useCreateEvent() {
    const queryClient = useQueryClient();

    return useMutation(
        (data: EventProperties) => api.events.store(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
