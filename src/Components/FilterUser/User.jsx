import React, { useEffect, useState } from 'react'

const User = () => {
    const [userList, setuserList] = useState([])

    useEffect(()=>{
const fetchData=async ()=>{
    const response = await fetch("https://randomuser.me/api/?results=30")
    const data=await response.json()
    console.log(data.results );
  }
  fetchData()
},[])
return (
  <div>
{      console.log(userList )
}    </div>
  )
}

export default User