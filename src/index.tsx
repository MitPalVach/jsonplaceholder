import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"; // прокидывание стора в компонент App с помощью Provider
import {store} from "./store/store";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
