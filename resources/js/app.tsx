import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import {ptBR} from "date-fns/locale";
import DateFnsUtils from '@date-io/date-fns';
import {RootRoutes} from "./routes/RootRoutes";
import {hot, setConfig} from "react-hot-loader";
import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter as Router} from "react-router-dom";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {QueryClient, QueryClientProvider} from "react-query";

const isProduction = process.env.MIX_APP_ENV === 'production';

const WrappedRoot = hot(module)(RootRoutes);

if (!isProduction) {
    setConfig({reloadHooks: false});
}

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                    {isProduction ? <RootRoutes/> : <WrappedRoot/>}
                </MuiPickersUtilsProvider>
            </Router>
            {!isProduction && <ReactQueryDevtools initialIsOpen={false}/>}
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
