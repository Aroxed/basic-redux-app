import React from 'react'
import { useSelector} from 'react-redux'


const ComputedCount = () => {
    const usersListData = useSelector(state => state.usersList)
    const {loading, error, users} = usersListData
    return (
        <>
            {loading ? "Loading..." : error ? error.message : <h5>{users.length}</h5>}
        </>
    )
}

export default ComputedCount
