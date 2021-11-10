export interface UserState {  // 7. типизация инициализационного стейта
    users: any[]
    loading: boolean
    error: null | string
}

export enum UsersActionTypes {  // 8. типы экшенов записаны в константы
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {   // 9. типизация каждого экшена
    type: UsersActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {  // 9.
    type: UsersActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction {  // 9.
    type: UsersActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction    // 10. объединение типизации всех экшенов
