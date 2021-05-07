import {Path, useForm} from "react-hook-form";

export const useMyForm = <T>() => {
    const original = useForm<T>();

    function setAutoErrors(errors: object) {
        for (let [key, messages] of Object.entries(errors)) {
            original.setError(key as Path<T>, {type: 'manual', message: messages[0]});
        }
    }

    return {setAutoErrors, ...original}
};
