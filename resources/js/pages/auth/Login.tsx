import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {Input} from "../../components/form/Input";
import {Button} from "../../components/ui/Button";
import {Container} from "../../containers/Container";
import useNavigation from "../../hooks/useNavigation";
import {Title} from "../../components/ui/Title";

type Credentials = {
    email: string;
    password: string;
}

export const Login: React.FC<object> = () => {
    const {go} = useNavigation();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<Credentials>();

    async function login(credentials: Credentials) {
        setLoading(true);
        try {
            go('/home');
        } catch (e) {
            // TODO
        }
        setLoading(false);
    }

    return <Container className="flex mx-auto container justify-center items-center">
        <form className="px-4 w-full" onSubmit={handleSubmit(login)}>
            <Title type="super" className="mb-10">
                EventLab
            </Title>

            <div className="space-y-8">
                <div>
                    <Input
                        name="email"
                        label="Email"
                        error={errors.email}
                        inputProps={register("email", {required: true})}
                    />
                </div>

                <div>
                    <Input
                        name="password"
                        label="Senha"
                        error={errors.password}
                        inputProps={{
                            ...register("password", {required: true}),
                            type: 'password',
                        }}
                    />
                </div>

                <div className="pt-4">
                    <Button className="w-full" loading={loading}>
                        Entrar
                    </Button>
                </div>

                <div className="mt-8 px-4 text-center">
                    <Link to="/register" className="w-full text-gray-500">
                        <span>Ainda não possui uma conta?</span>
                        <span className="ml-1 text-blue-500 hover:underline">Registre-se aqui</span>
                    </Link>
                </div>
            </div>
        </form>
    </Container>
};
