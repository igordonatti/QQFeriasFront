import React from 'react'
import { Global } from './styles/global'
import { _login } from './pages/Login/_login'
import { _initColaborador } from './pages/InitColaborador/_initColaborador'


export const App = () => {
  return (
    <div>
      <_initColaborador />
      <Global />
    </div>
  )
}
