import { createStore } from "redux";
import CalReducer from "./CalReducer";

const store = createStore(CalReducer)

export default store