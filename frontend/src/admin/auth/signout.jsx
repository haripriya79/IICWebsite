import React from 'react'
import { Navigate } from 'react-router-dom'
import { signout } from './helper'

export default function Signout() {
  signout(()=>{});
  return (
    <Navigate replace to="/admin/signin/"></Navigate>
  )
}
