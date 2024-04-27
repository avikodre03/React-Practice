import React from 'react'
import { useSelector } from 'react-redux'
import myStore from './Store'

const Result = () => {

    const data = useSelector((myStore) => {
        return myStore
    })
    console.log(data);
    return (
        <div>Result
            <h2>Comp1:{data.comp1}</h2>
        </div>
    )
}

export default Result