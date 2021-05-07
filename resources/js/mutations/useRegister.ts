import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useRegister() {
    const queryClient = useQueryClient();

    return useMutation(
        (data: RegisterParameters) => api.auth.register(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
