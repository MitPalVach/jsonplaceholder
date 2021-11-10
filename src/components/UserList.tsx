import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/actionCreators/user";


const UserList = () => {
    const {users, loading, error} = useTypedSelector(state => state.user) // 19. выдергивание состояния из стора кастомным useSelector со встроенной типизацией rootReducer
    const dispatch = useDispatch()

    useEffect(() => { // 27. вызов side эффектов
        dispatch(fetchUsers()) // 28. применение вызова actionCreator, чтобы сделать запрос на сервер
    }, []) // при первом рендере страницы

    if (loading) return <h3>Идет загрузка...</h3> // 29. если loading===true то надпись "Идет загрузка..."
    if (error) return <h3>{error}</h3> // 30. если вышла ошибка, то выводится эта ошибка

    return (
        <div>
            {users.map(user => // 31. после того как пользователи подгрузились и не вылезла ошибка, то users.map
                <div key={user.id}>{user.name}</div> // 32. отрисовывается имя каждого юзера (помнить про key)
            )}
        </div>
    );
};

export default UserList;