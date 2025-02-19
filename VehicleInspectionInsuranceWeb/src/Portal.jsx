import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Portal({ theme }) {
  return (
    <>
      <div id="wrapper">
        <Sidebar theme={theme} />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content" className='dark:bg-[#404040] bg-[#fafafa] transition-all duration-200'>
            <Topbar />
            <div className="container-fluid p-0">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portal

