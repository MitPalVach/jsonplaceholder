import {UserAction, UsersActionTypes, UserState} from "../../types/userTypes";


const initialState: UserState = { // инициализационное значение объекта
    users: ['saas','asas','asas'],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => { // редюсер принимает стейт и экшен со своими типами, и типизация что возвратит редюсер
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []} // возвращаемое значение редюсера с измененным стейтом в зависимости от типа экшена
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default: // если не один редюсер не сработал (не был вызван)
            return state // то возвращается не измененный стейт
    }
}




