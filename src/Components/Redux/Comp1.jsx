import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionFn } from './Action'

const Comp1 = () => {
    const [state, setstate] = useState('')
    const dispatch = useDispatch()
    const handledata = () => {
        dispatch(actionFn("comp1", state))
    }
    console.log(state);
    return (
        <div>Comp1
            <input type="text" placeholder='text' onChange={(e) => {
                setstate(e.target.value)
            }} />
            <button onClick={handledata}>submit</button>
        </div>
    )
}

export default Comp1