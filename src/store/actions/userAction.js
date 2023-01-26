import {GET_USERS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        await new Promise(resolve=>setTimeout(resolve, 3000)); //wait for 3 seconds
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }

}