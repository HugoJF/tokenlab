import {useQuery} from "react-query";
import {api} from "../api";

export function useMe() {
    return useQuery(
        'me',
        api.auth.me
    )
}
