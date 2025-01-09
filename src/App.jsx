import React from 'react'
import Napbar from './components/Napbar'
import Home from './components/Home'
import About from './components/About'
import Portfoliyo from './components/Portfoliyo'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contect from './components/Contect'
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
    <div >
    <Napbar/>
    <Home/>
    <About/>
    <Portfoliyo/>
    <Experiance/>
    <Contect/>
    <Footer/>   
    </div>
    <Toaster />

    </>


  )
}

