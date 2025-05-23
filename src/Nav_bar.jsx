import React, { useContext } from 'react'
import Context, { Appcontext } from './Context'
import { GiTreeBranch } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBarsStaggered } from "react-icons/fa6";


function Nav_bar() {

    let {darkmod} = useContext(Appcontext)

    return (
    <div className={`main`} >
      <div className={`w-[95%] sm:w-[90%] nav_anime mx-auto mt-6 rounded-xl h-[50px] transition-all duration-300 ease-linear bshb ${darkmod ? "bg-black" : "bg-white"} flex justify-between items-center px-2 md:px-5`}>
        <h1 className={`${darkmod ? "text-white tshw" : "text-black tshb"} transition-all duration-300 ease-linear font-bold text-lg md:text-xl flex items-center gap-2 context`}><GiTreeBranch className='text-green-600' /> Expense <span className='text-blue-600 tshb2'>Tracker</span> </h1>
        <ul className={`${darkmod ? "text-white tshw" : "text-black tshb"} transition-all duration-300 ease-linear hidden md:flex w-max justify-center items-center gap-5 pr-25`}>
          <li className="text-lg cursor-pointer underline text-blue-600 tshb2">Dashboard</li>
          <li className="text-lg cursor-pointer">Payment</li>
          <li className="text-lg cursor-pointer">Setting</li>
        </ul>
        <div className={`w-max h-full flex justify-center items-center gap-3 transition-all duration-300 ease-linear text-xl ${darkmod ? "text-white" : "text-black"}`}>
          <FaBell className='cursor-pointer hidden sm:block'/>
          <CgProfile className='cursor-pointer text-blue-600 hidden sm:block'/>
          <FaBarsStaggered  className={` block md:hidden transition-all duration-300 ease-linear ${darkmod ? "text-white" : " text-black"} cursor-pointer`}/>
        </div>
      </div>

    </div>
  )
}

export default Nav_bar