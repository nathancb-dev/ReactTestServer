import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import Layout from "./components/Layout";
import createStore from "./store";

const store = createStore( window.REDUX_DATA );

const jsx = (
    <ReduxProvider store={ store }>
            <Layout />
    </ReduxProvider>
);

const app = document.getElementById( "app" );
ReactDOM.hydrate( <Layout />, app );
