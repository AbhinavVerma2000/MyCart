import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const MyAccount = () => {
    let router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem('token')) router.push('/')
    },[router, router.query])
  return (
    <div>
      
    </div>
  )
}

export default MyAccount
