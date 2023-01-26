import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {getCalc} from "../store/actions/calcAction"

const Calc = () => {
    const calc = useSelector(state => state.calc)
    const dispatch = useDispatch()
    const {v} = calc
    const doCalcNow = ()=> {
        dispatch(getCalc(6,2))
    }
    return (
        <>
            <button onClick={()=>doCalcNow()}>Do Calc</button>
            <h2>Calc: {v}</h2>
        </>
    )
}

export default Calc
