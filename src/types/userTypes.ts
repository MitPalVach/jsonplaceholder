export interface UserState {  // типизация объекта
    users: any[]
    loading: boolean
    error: null | string
}

export enum UsersActionTypes {  // типы экшенов в константы
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {   // типизация каждого экшена
    type: UsersActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction    // типизация всех экшенов
