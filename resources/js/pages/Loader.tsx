import React from "react";
import {Loader} from "react-feather";
import {Container} from "../containers/Container";

export const Loading: React.FC = () => {
    return <Container className="flex mx-auto container justify-center items-center">
        <Loader className="animate-spin" size={64}/>

    </Container>
};
