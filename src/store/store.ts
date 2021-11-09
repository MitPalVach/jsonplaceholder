import {applyMiddleware, createStore} from "redux"; // инициализация стора проекта
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {userReducer} from "./reducers/userReducer";


export const rootReducer = combineReducers({ // создание рутового редюсера из всех редюсеров приложения
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer> // типизация rootReducer

export const store = createStore(rootReducer, applyMiddleware(thunk)) // создание стора. подключение редюсеров и санки через миделварю

