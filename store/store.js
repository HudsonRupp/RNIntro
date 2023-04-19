import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './slices/AuthenticationSlice/index.js'
import RootReducer from './slices/RootReducer.js'
import themeReducer from './slices/ThemeSlice/index.js'


export default configureStore({
 reducer: RootReducer
})