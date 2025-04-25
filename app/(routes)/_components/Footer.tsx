"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const router=useRouter()

  return (
    <div className='flex flex-col items-center justify-center space-y-2 p-5'>
      <div><Button variant="link" onClick={()=>router.push("/")}>All Right</Button></div>
      <div>Copyright @ Bekir Aydoğan 2025</div>
       
    </div>
  )
}

export default Footer