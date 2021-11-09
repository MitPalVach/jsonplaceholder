import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/store";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector // создание кастомного хука со встроенной
// типизацией rootReducer (тк типизация дефолтного useSelector хромает)