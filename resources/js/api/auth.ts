import {bxios} from "../bxios";

export const auth = {
    login: (data: LoginParameters) => bxios()
        .setOutsideApi()
        .post('login')
        .body(data)
        .send(),
    logout: () => bxios()
        .setOutsideApi()
        .post('logout')
        .send(),
    me: () => bxios()
        .get('me')
        .send<UserType>(),
};
