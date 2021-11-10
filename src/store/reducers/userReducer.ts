import {UserAction, UsersActionTypes, UserState} from "../../types/userTypes";


const initialState: UserState = { // 5. инициализационное значение стейта, которое будет в этом редюсере
    users: [], // 5.1 пустой массив пользователей
    loading: false, // 5.2 флаг говорящий идет загрузка или нет
    error: null // 5.3 поле содержит строку об ошибке или null
}

export const userReducer = (state = initialState, action: UserAction): UserState => { // 3. редюсер принимает стейт и экшен
    // ^6. ставим тип стейту и этот же тип редюсер должен вернуть
    // ^11. ставим типизацию для экшенов

    switch (action.type) { // 4. конструкция, которая в зависимости от экшена будет вызывать тот или иной кейс
        case UsersActionTypes.FETCH_USERS: // 12. создание кейса
            return {loading: true, error: null, users: []} // 13. возвращаемое значение редюсера с измененным стейтом в зависимости от типа экшена
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default: // 14. если не один редюсер не отработал (не был вызван)
            return state // 14. то возвращается не измененный стейт
    }
}




