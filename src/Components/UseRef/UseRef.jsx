import React, { useRef, useState } from 'react'

const UseRef = () => {
const [timer, settimer] = useState(0)
let timerId=useRef(null)
let h2ref=useRef()

const start=()=>{
    h2ref.current.style.color = "orange"
    timerId.current=setInterval(()=>{
        settimer((prev)=>prev+1)
    },1000)
}
const stop=()=>{
    h2ref.current.style.color = "blue"
clearInterval(timerId.current)
}
const reset=()=>{
    h2ref.current.style.color = "red"
clearInterval(timerId.current)
settimer(0)
}

  return (
    <div>
        <h2 style={{color:"red"}} ref={h2ref}> Timer App</h2>
<h3>Timer : {timer}</h3>
<button onClick={start}>start</button>
<button onClick={stop}>stop</button>
<button onClick={reset}>reset</button>

    </div>
  )
}

export default UseRef