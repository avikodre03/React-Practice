import React, { useState } from 'react'

const Todo = () => {
    const [inputValue, setinputValue] = useState("")
    const [todoList, settodoList] = useState([])


    const [editId, seteditId] = useState(null)
    const [editvalue, seteditvalue] = useState("")
    const handleAdd = () => {
       
        if (inputValue !== '') {
            settodoList([...todoList, { inputValue: inputValue,id: Date.now() }])
            setinputValue('')
        } else {
            alert("please add input")
        }
    }

    const deletefn = (id) => {
        let newList = todoList.filter((ele) => {
            return ele.id !== id
        })
        settodoList(newList)
    }
    const editfn=(id)=>{
        let editList = todoList.find((ele) => {
            return ele.id === id
        })
        seteditId(id)
        seteditvalue(editList.inputValue)
    }

    const updatefn=()=>{
        if(editvalue!==""){
            settodoList(todoList.map((ele)=>{
                if(ele.id===editId){
return {...ele,inputValue:editvalue}
                }
                return ele
        }))
        
        }
   seteditId("")
   seteditvalue("")
    }
    return (
        <div>
            <h1>Todo</h1>
            <input type="text" placeholder='add todo' value={inputValue} onChange={(e) => {
                setinputValue(e.target.value)
            }} />
            <button onClick={handleAdd}>add</button>

            {todoList && todoList.map((ele) => {
                return <>
                {editId===ele.id
                ?
                <div className="todolist">
                    <input type="text" value={editvalue} onChange={(ele)=>{
                        seteditvalue(ele.target.value)
                    }} />
                    <button onClick={updatefn}>update</button>
                </div>
                :
                    <div className="todolist">
                        <ul>
                            <li>{ele.inputValue}
                              <button onClick={()=>deletefn(ele.id)}>delete</button>
                                <button onClick={()=>editfn(ele.id)}>edit</button>
                            </li>
                        </ul>
                    </div>
            }
                </>
            })}
        </div>
    )
}

export default Todo