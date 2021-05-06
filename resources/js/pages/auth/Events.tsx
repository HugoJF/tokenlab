import React from "react";
import {Container} from "../../containers/Container";
import {ChevronRight} from "react-feather";
import {Title} from "../../components/ui/Title";
import {useEvents} from "../../queries/useEvents";

type Credentials = {
    email: string;
    password: string;
}

export const Events: React.FC<object> = () => {
    const events = useEvents();

    return <Container>

        <Title>Eventos</Title>

        <div className="grid grid-cols-2 gap-4">
            {Object.values(events)
                   .map(event => <a
                       href="#"
                       className="duration-200 flex px-5 py-4 bg-white border rounded-lg cursor-pointer hover:shadow"
                   >
                       <div className="flex flex-col pr-4 justify-center items-center border-r">
                           <div className="text-gray-500 tracking-tight">QUARTA</div>
                           <div className="text-4xl">11</div>
                       </div>
                       <div className="px-4">
                           <h2 className="text-lg font-medium">Meu evento maravilhoso</h2>
                           <span className="px-1 text-sm text-blue-500 bg-blue-100 border border-blue-500 rounded">May 4, 2021, 09:25 – May 5, 2021, 09:25</span>
                           <p className="mt-3 text-gray-700 leading-5">Evento top10 das galaxias para tokenlab
                               envolvendo Javascript, será emitido certificado de 200 pontos para todos os
                               participantes</p>
                       </div>
                       <div className="flex items-center">
                           <ChevronRight className="text-gray-500"/>
                       </div>
                   </a>)}
        </div>

    </Container>
};
