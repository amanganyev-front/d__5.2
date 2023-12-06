import { types } from "./types"

const initialState = {
    title: "old title",
}

export default function reducer (state = initialState, action) {
    switch(action.type){
        case types.MAIN_TITLE:
            return {...state, title: 'new title'}
        case types.WITH_PARAMS:
            return {...state, title: action.payload}
        default: return state
        }
}