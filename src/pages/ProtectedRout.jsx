import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRout = () => {

  if(localStorage.getItem("token")){
    return <Outlet />
  }else{
    return <Navigate to="login" />
  }
}

export default ProtectedRout