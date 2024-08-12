import React from 'react'
import HeaderMenu from '../HeaderMenu'
import { Outlet } from 'react-router-dom'

const HomePageMaster = () => {
  return (
    <>
        <HeaderMenu></HeaderMenu>

        <div style={{minHeight:650}} className='content'>
            <Outlet></Outlet>
        </div>

        <footer className='fs-1 bg-dark text-white text-centerư'>
            Footer
        </footer>
    </>
    
  )
}

export default HomePageMaster