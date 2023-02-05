import {createSlice} from "@reduxjs/toolkit"
import {data , Categories} from './DB'

const initialState = {
    data: data,
    Categories: Categories,
    bag:{},
    totalPrice:0,

    selectedCategory: "bestseller",
}



const uiSlice = createSlice({
    name: 'ui',
    initialState : initialState,
    reducers: {

        changeCategory(state,{payload}){
            console.log(payload)
            state.selectedCategory = state.Categories[payload].category
        },

        addToBag(state,{payload}){

            const id = payload.id

            if(state.bag[id]){
                state.bag[id] = state.bag[id] + 1 
            }
            else{
                state.bag[id] = 1
            }

            state.totalPrice += payload.price
        },

        decrement(state,{payload}){
            
            
            const id = payload.id
            const price = payload.price

            if(state.bag[id] && state.bag[id] === 1){
                delete state.bag[id]
            }
            else{
                state.bag[id] -= 1
            }

            state.totalPrice -= price


        },

        increment(state,{payload}){
            const id = payload.id
            const price = payload.price
            state.bag[id] += 1
            state.totalPrice += price
        },

        clearTheBag(state){
            state.bag={}
            state.totalPrice = 0
        }

    }
})


export const uiReducer = uiSlice.reducer
export const {changeCategory, addToBag, decrement,increment,clearTheBag} = uiSlice.actions