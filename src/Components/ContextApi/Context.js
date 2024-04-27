import { createContext, useState } from "react";

export const myContext=createContext();


export function CustomProvider({children}){
const [islogin, setislogin] = useState(false)

const login=()=>{
    setislogin(true)
}

const logout=()=>{
    setislogin(false)
}

return(
    <myContext.Provider value={{islogin,setislogin,login,logout}}>
        {children}
    </myContext.Provider>
)

}