import React, {useEffect, useState} from "react";
import {DateTimePicker} from "@material-ui/pickers";
import {formatISO, parseISO} from "date-fns";
import {useForm} from "react-hook-form";
import {Button} from "../ui/Button";
import {Input} from "../form/Input";
import {Field} from "../form/Field";

export type OpeningFormProps = {
    event?: EventType;
    onSubmit: (data: EventProperties) => void;
    action: string;
}

export const EventForm: React.FC<OpeningFormProps> = ({event, onSubmit, action}) => {
    const [loading, setLoading] = useState(false);
    const [startsAt, setStartsAt] = useState(new Date);
    const [endsAt, setEndsAt] = useState(new Date);
    const {register, handleSubmit, formState: {errors}, setError, setValue} = useForm<EventProperties>();

    async function submit(data: EventProperties) {
        setLoading(true);
        try {
            await onSubmit({
                ...data,
                starts_at: formatISO(startsAt),
                ends_at: formatISO(endsAt),
            });
        } catch (e) {
            setLoading(false);
            setErrors(e.errors);
            throw e;
        }
    }

    useEffect(() => {
        if (!event) {
            return;
        }

        for (let prop of Object.keys(event)) {
            // @ts-ignore
            setValue(prop, event[prop]);
        }

        // Manually updates dates that are not handled by react-hook-form
        setStartsAt(parseISO(event.starts_at));
        setEndsAt(parseISO(event.ends_at));
    }, [setValue, event]);

    function setErrors(errors: object) {
        for (let [key, messages] of Object.entries(errors)) {
            // @ts-ignore
            setError(key, {type: 'manual', message: messages[0]});
        }
    }

    return <form className="space-y-4" onSubmit={handleSubmit(submit)}>
        {/* Title */}
        <div>
            <Input
                name="title"
                label="Título do evento"
                error={errors.title}
                inputProps={
                    register("title", {required: 'Digite o título do seu evento'})
                }
            />
        </div>

        {/* Description */}
        <div>
            <Input
                name="description"
                label="Descrição do evento"
                error={errors.description}
                inputProps={
                    register("description", {required: 'Digite a descrição do seu evento'})
                }
            />
        </div>

        {/* Start date */}
        <div>
            <Field name="starts_at" label="Data de início">
                <div className="flex flex-col items-stretch w-full bg-white rounded">
                    <DateTimePicker
                        name="starts_at"
                        ampm={true}
                        format="d 'de' MMMM 'às' HH:mm:ss"
                        value={startsAt}
                        inputVariant="outlined"
                        onChange={(date) => setStartsAt(date as Date)}
                    />
                </div>
            </Field>
        </div>

        {/* End date */}
        <div>
            <Field name="ends_at" label="Data de término">
                <div className="flex flex-col items-stretch w-full bg-white rounded">
                    <DateTimePicker
                        name="ends_at"
                        ampm={true}
                        format="d 'de' MMMM 'às' HH:mm:ss"
                        value={endsAt}
                        inputVariant="outlined"
                        onChange={(date) => setEndsAt(date as Date)}
                    />
                </div>
            </Field>
        </div>

        <div className="pt-4">
            <Button className="w-full" loading={loading}>
                {action}
            </Button>
        </div>
    </form>
};
