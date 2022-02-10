
import { createStore, combineReducers } from "redux";
import cashReducer from "./reducer";
import secondReducer from "./secondReducer";
import { composeWithDevTools } from 'redux-devtools-extension';




const rootReducer = combineReducers({
    //можно менять названия переменных
    cash: cashReducer,
    customers: secondReducer,

})


const store = createStore(rootReducer, composeWithDevTools());


export default store; 