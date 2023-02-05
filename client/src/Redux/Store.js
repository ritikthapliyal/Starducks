import { uiReducer } from './uiSlice'
import { userReducer } from './userSlice'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({reducer : {    uiState : uiReducer, 
                                                    userState : userReducer
                                                }
                                    })