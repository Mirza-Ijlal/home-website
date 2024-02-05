"use client"
import Header from '@/Component/Header'
import './globals.css'
import { useEffect } from 'react'
import { UserProvider } from '@auth0/nextjs-auth0/client';





export default function RootLayout({ children }) {
 useEffect(() => {
   
 
   return () => {
     if(typeof window!=="undefined"){
      require('bootstrap/dist/js/bootstrap.min.js')
     }
   }
 }, [])
 


  return (
    <html lang="en">
      
      

      <UserProvider>

      <body>
        <Header/>
        {children}
        </body>
    </UserProvider>
      
    </html>
  )
}
