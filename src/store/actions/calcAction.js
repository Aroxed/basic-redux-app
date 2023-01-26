import {DO_CALC, CALC_ERROR} from '../types'

export const getCalc = (a, b) => dispatch => {
    
    try{
        const v = a / b
        dispatch( {
            type: DO_CALC,
            payload: v
        })
    }
    catch(error){
        dispatch( {
            type: CALC_ERROR,
            payload: error,
        })
    }

}