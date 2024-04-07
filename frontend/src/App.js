import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {LoginPage,SignUpPage,HomePage} from "./Routes.js"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />}/>

        <Route path='/login' element={<LoginPage />}/>
        <Route path='/sign-up' element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
