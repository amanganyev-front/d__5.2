import { types } from "./types";

const initialState = {
    inputValue: '',
    users: []
}

export default function usersReducer(state = initialState, action){
    switch (action.type) {
        case types.INPUT_VALUE:
            return {...state, inputValue: action.payload}
        case types.ADD_USER:
            return {users: [...state.users, action.payload ], inputValue: ''}
        case types.DELETE_ALL:
            return { users: [], inputValue: ''}
        default: return state
    } 
}
