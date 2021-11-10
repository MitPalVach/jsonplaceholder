import {Dispatch} from "redux";
import {UserAction, UsersActionTypes} from "../../types/userTypes";
import axios from "axios";


export const fetchUsers = () => {  // 20. функция получение юзеров (thunk creator)
    return async (dispatch: Dispatch<UserAction>) => {  // 21. функция делает запрос на сервер (thunk) / типизация какие экшены могут быть задиспатчены
        try { // 22. оборачиваем код в try/catch для отлова ошибок
            dispatch({ // 23. диспатч экшена FETCH_USERS
                type: UsersActionTypes.FETCH_USERS
            })
            // ниже логика запроса
            const response = await axios.get('https://jsonplaceholder.typicode.com/users') // 25. делается запрос на сервер за получением пользователей
            setTimeout(() => { // setTimeout нужен только для имитации нагруженности сервера
                dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data}) // если запрос прошел успешно то выполнится этот код, если нет то блок catch,
                // ^26. в качестве payload передаются данные полученные от сервера
            }, 500)
        } catch (e) {
            dispatch({ // 24. если возникла ошибка то диспатч FETCH_USERS_ERROR, где payload строка
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}



