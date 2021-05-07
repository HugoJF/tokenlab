import {Title} from "../../components/ui/Title";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Input} from "../../components/form/Input";
import {Button} from "../../components/ui/Button";
import useNavigation from "../../hooks/useNavigation";
import {Container} from "../../containers/Container";
import {useRegister} from "../../mutations/useRegister";
import {useLogin} from "../../mutations/useLogin";
import {useMyForm} from "../../hooks/useForm";

export const Register: React.FC<object> = () => {
    const {go} = useNavigation();
    const userRegister = useRegister();
    const login = useLogin();
    const [loading, setLoading] = useState(false);
    const {setAutoErrors, register, handleSubmit, watch, formState: {errors}} = useMyForm<RegisterParameters>();

    async function registerUser(credentials: RegisterParameters) {
        setLoading(true);
        try {
            await userRegister.mutateAsync(credentials);
            await login.mutateAsync({
                email: credentials.email,
                password: credentials.password,
                remember: true
            });
            go('/events');
        } catch (e) {
            setAutoErrors(e.response.data.errors);
        }
        setLoading(false);
    }

    return <Container className="flex flex-col justify-center items-center">
        <form className="w-full" onSubmit={handleSubmit(registerUser)}>
            <Title className="mb-10">
                Criando uma nova conta
            </Title>

            <div className="space-y-8">
                {/* Name */}
                <div>
                    <Input
                        name="name"
                        label="Nome"
                        error={errors.name}
                        inputProps={{
                            ...register("name", {required: 'Digite o seu nome'}),
                            placeholder: 'Digite o seu nome',
                            type: 'text',
                        }}
                    />
                </div>

                {/* Email */}
                <div>
                    <Input
                        name="email"
                        label="Email"
                        error={errors.email}
                        inputProps={{
                            ...register("email", {required: 'Digite um email'}),
                            placeholder: 'Digite um email para registrar',
                            type: 'email',
                        }}
                    />
                </div>

                {/* Password */}
                <div>
                    <Input
                        name="password"
                        label="Senha"
                        error={errors.password}
                        inputProps={{
                            ...register("password", {required: 'Digite uma senha'}),
                            placeholder: 'Digite uma senha',
                            type: 'password',
                        }}
                    />
                </div>

                {/* Password confirmation */}
                <div>
                    <Input
                        name="password_confirmation"
                        label="Confirmação da senha"
                        error={errors.password_confirmation}
                        inputProps={{
                            ...register("password_confirmation", {
                                required: true,
                                validate: (p: string) => p === watch('password') || 'As senhas não conferem',
                            }),
                            placeholder: 'Digite a senha novamente',
                            type: 'password',
                        }}
                    />
                </div>

                <Button className="w-full mt-8" loading={loading}>Registrar</Button>

                <div className="text-center mt-8">
                    <Link to="/login" className="w-full text-gray-500">
                        Já possui uma conta?
                        <span className="ml-1 text-blue-500 hover:underline">Clique aqui</span>
                    </Link>
                </div>
            </div>
        </form>
    </Container>
};
