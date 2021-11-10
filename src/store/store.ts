import {applyMiddleware, createStore} from "redux"; // инициализация стора проекта
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {userReducer} from "./reducers/userReducer";


export const rootReducer = combineReducers({ // 2. создание рутового редюсера из всех редюсеров приложения
    user: userReducer, // 15. устанавливаем редюсер в список rootReducer
})

export type RootState = ReturnType<typeof rootReducer> // 16. типизация rootReducer

export const store = createStore(rootReducer, applyMiddleware(thunk)) // 1. инициализация/создание стора. первый параметр редюсер, второй миделвейр

