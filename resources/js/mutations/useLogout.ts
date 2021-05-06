import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useLogout() {
    const queryClient = useQueryClient();

    return useMutation(
        () => api.auth.logout(),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
