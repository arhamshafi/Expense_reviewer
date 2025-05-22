import React, { useContext } from 'react'
import Input from './Input'
import { Appcontext } from './Context';

import Nav_bar from './Nav_bar';
import Display from './Display';
import Loader from './Loader';
import Storage from './Storage';
function App() {

  let { darkmod, loader} = useContext(Appcontext)
  
  if(loader){
    return(
      <div className={`w-full h-screen flex justify-center ${darkmod ? "bg-black" : "bg-white" } items-center`}> <Loader/> </div>
    )
  }

  return (
    <>
    <Nav_bar/>
    <Display/>
    <Storage/>
    </>
  )
}

export default App