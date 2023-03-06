import { TypedUseSelectorHook,useSelector,useDispatch } from "react-redux";
import type { RootState,AppDispatch } from "../store/store"; 


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;