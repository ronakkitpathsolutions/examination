import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import useRoutes from './routes'
import NotFound from '../presentation/NotFound'

const Routing = ({...props}) => {

    const { publicRoutes } = useRoutes()

  return (
    <Routes {...props} >
        <Route path='/' element={<Layout isDefaultAccess />} >
        {publicRoutes.map(({ id, ...otherProps }) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing