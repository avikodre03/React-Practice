import React, { useReducer } from 'react'
import { Reducerfn } from './Reducer'

const CounterApp = () => {
    let [state,dispatch]=useReducer(Reducerfn,{count:0})
  return (
    <div>
        <h1>CounterApp</h1>
        <h2>counter: {state.count}</h2>
        <button
        onClick={()=>{
            dispatch({
                type:"INCREASE",
                payload:1
            })
        }}
        >Increase</button>
        <button onClick={()=>{
            dispatch({
                type:"DECREASE",
                payload:1
            })
        }}>decrease</button>
        <button onClick={()=>{
            dispatch({
                type:"RESET"
            })
        }}>reset</button>
        </div>
  )
}

export default CounterApp