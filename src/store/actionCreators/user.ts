import {Dispatch} from "redux";
import {UserAction, UsersActionTypes} from "../../types/userTypes";
import axios from "axios";


export const fetchUsers = () => {  // функция получение юзеров (thunk creator)
    return async (dispatch: Dispatch<UserAction>) => {  // функция делает запрос на сервер (thunk) / типизация какие экшены могут быть задиспатчены
        try {
            dispatch({ // отправка (диспатч) экшена FETCH_USERS
                type: UsersActionTypes.FETCH_USERS
            })
            // ниже логика запроса
            const response = await axios.get('https://jsonplaceholder.typicode.com/users') // делается запрос на сервер за получением пользователей
            setTimeout(() => { // setTimeout нужен только для имитации нагруженности сервера
                dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data}) // если запрос прошел успешно то выполнится этот код, если нет то блок catch,
                // в качестве payload передаются данные полученные от сервера
            }, 500)
        } catch (e) {
            dispatch({ // если возникла ошибка то диспатч FETCH_USERS_ERROR
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}



