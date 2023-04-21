
import { combineReducers } from "@reduxjs/toolkit"
import authenticationReducer from "./AuthenticationSlice"
import themeReducer from "./ThemeSlice"


const appReducer = combineReducers({
    theme: themeReducer,
    authentication: authenticationReducer
})

const RootReducer = (state, action) => {

    if (action.type == 'userLogOut') {
        state = undefined;
    }

    return appReducer(state, action);
}

export default RootReducer;