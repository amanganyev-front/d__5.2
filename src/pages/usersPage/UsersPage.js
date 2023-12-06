import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction, changeInputAction, delteAllAction } from '../../redux/actions'
import User from '../../components/User'

function UsersPage() {
    const { inputValue, users } = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(inputValue))
    }

    const deleteAll = () => {
        dispatch(delteAllAction())
    }

    return (
        <div>
            <input onChange={changeInput} type='text' value={inputValue} placeholder='name'/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>delete all</button>
            {users.map((users, idx) => <User key={idx} userName={users} />)}
        </div>
    )
}

export default UsersPage