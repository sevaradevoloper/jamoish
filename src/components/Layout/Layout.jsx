import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Section from '../Section/Section'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
       <main className='main'>
        <Outlet/>
       </main>
       <Section/>
       <Footer/>
    </>
  )
}

export default Layout