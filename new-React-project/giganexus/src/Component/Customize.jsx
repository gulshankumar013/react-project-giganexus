import React from 'react'
import '../css/customize.css'
import Cutomizehedder from './Customizehedder'
import { Link, Outlet } from 'react-router-dom'


const Customize = () => {
  return (
    <>
      <Cutomizehedder/>
      <Outlet/>
    </>
  )
}

export default Customize

