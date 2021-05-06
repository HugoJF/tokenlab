import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";

export function useLogin() {
    const queryClient = useQueryClient();

    return useMutation(
        (data: LoginParameters) => api.auth.login(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
