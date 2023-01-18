import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Base({title = "", subtitle="",children,}) {
  return (
    <div className="container-fluid p-0">
        <Header title={title} subtitle={subtitle}></Header>
        {children}
        <div className="border-top"></div>
        <Footer></Footer>
    </div>
  )
}
