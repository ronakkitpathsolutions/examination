import React from 'react'
import { Outlet } from 'react-router-dom'
import NotFound from '../presentation/NotFound'

const Layout = ({ isDefaultAccess, ...props }) => {
  return isDefaultAccess ? <section className='text-gray-600 body-font relative'  {...props} >
         <Outlet {...props} />
    </section> :  <NotFound />
}

export default Layout