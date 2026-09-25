
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import MailSend from './pages/MailSend'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
       <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
         <Route path='/mail' element={<MailSend/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App

