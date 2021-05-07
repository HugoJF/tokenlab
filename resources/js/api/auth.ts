import {bxios} from "../bxios";

export const auth = {
    login: (data: LoginParameters) => bxios()
        .noApiPrefix()
        .post('login')
        .body(data)
        .send(),
    register: (data: RegisterParameters) => bxios()
        .noApiPrefix()
        .post('register')
        .body(data)
        .send(),
    logout: () => bxios()
        .noApiPrefix()
        .post('logout')
        .send(),
    me: () => bxios()
        .get('me')
        .send<UserType>(),
};
