import {DO_CALC, CALC_ERROR} from '../types'

const initialState = {
    v: 0
}

export default function Reducers(state = initialState, action){

    switch(action.type){

        case DO_CALC: 
        return {
            ...state,
            v:action.payload,
        }
        case CALC_ERROR: 
            return{
                error: action.payload 
            }
        default: return state
    }

}