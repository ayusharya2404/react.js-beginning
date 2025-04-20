'use client'
import axios from 'axios'
import {React , useEffect, useState} from 'react'

const ManageUser = () => {

    const [userData , setUserData] = useState([])

    const fetchUserDAta = async() => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`)
        console.table(res.data);
        setUserData(res.data)
    }

    useEffect(()=>{
        fetchUserDAta()
    },[])

  return (
    <div>
      
    </div>
  )
}

export default ManageUser
