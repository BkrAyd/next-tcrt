import React from 'react'
import Header from './_components/Menu/Header';
import Footer from './_components/Footer'
import { Toaster } from "sonner"


interface RoutesLayoutProps {
  children: React.ReactNode
}
const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (
    <>
    <Header/>
    <div>
      <div className="container mx-auto min-h-screen flex flex-col justify-between">
        {children}
        
      </div>
      <Toaster />
      
    </div>
    <Footer />
    </>
    
  )
}

export default RoutesLayout