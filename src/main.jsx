import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Layout from './Layout.jsx'

import Home from './container/Home.jsx'
import Ticket from './container/Ticket.jsx'
import Dashboard from './container/Dashboard.jsx'
import Agent from './container/Agent.jsx'
import Auth from './container/Auth.jsx'
import Chat from './container/Chat.jsx'
import User from './container/User.jsx'


import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import Coindesk from './components/Coindesk.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/ticket' element={<Ticket/>}/>

    <Route path='/auth' element={<Auth/>}/>

    <Route path='/agent' element={<Agent/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/coindesk' element={<Coindesk/>}/>
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
