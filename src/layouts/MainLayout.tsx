import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Nav />
      <main>
            <Outlet />
      </main>
    </>
  )
}
