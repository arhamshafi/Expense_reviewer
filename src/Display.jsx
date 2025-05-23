import React, { useContext } from 'react'
import Context, { Appcontext } from './Context'
import Calender from "./Calender"
import { MdLightMode } from "react-icons/md";
import Switch from './Check_box';
import cloud from "../src/cloud.png"


function Display() {

    let { darkmod, time, day, date, greeting, weather } = useContext(Appcontext)

    return (
        <div className='pb-12'>
            <div className='w-[90%] h-[200px] dis_1 mx-auto mt-12 rounded-2xl overflow-hidden bshb bg-[url("/src/horse.jpg")] bg-cover bg-center relative'>
                <div className={`w-full h-full context py-3 px-2 sm:px-5  gap-3 ${darkmod ? "bg-gradient-to-t from-black to-transparent d-bg" : "d-bg"} transition-all duration-300 ease-linear `}>
                    <h1 className=' text-white font-bold text-2xl sm:text-3xl tshw context'>{greeting} , <span className='text-yellow-500 tshy'>Arham Shafi...</span> </h1>
                    <p className='text-md text-white tshw context mt-12 sm:mt-14'> {day}, {date} </p>
                    <h1 className=' text-yellow-500 mt-2 font-white  text-3xl sm:text-5xl tshy context'>{time}</h1>
                </div>
            </div>
            <div className='w-[90%] h-max flex flex-wrap  justify-between px-3 items-center mx-auto overflow-hidden py-2 mt-8  rounded-xl'>
                {/* //////////////////////////////////////////////////////////////////////////////////// */}

                <div className={`w-full sm:w-[47%] lg:w-[30%] temp  rounded-xl  h-[300px] order-1 sm:order-1 md:order-1 lg:order-1 relative ${darkmod ? "bg-white bshb" : "bg-blue-100 bshb2"} transition-all duration-all ease-linear`}>
                    <img className='absolute w-[120px] top-0 right-0' src={cloud} alt="" />
                    <h1 className={`font-bold ml-5 mt-22 text-2xl context text-black tshb`}>Temperature: {(weather?.main?.temp_max - 273.15).toFixed(1)}°C</h1>
                    <p className={`text-black tshb context font-bold tracking-[1px] ml-5 mt-8 text-lg`}>City : <span className={`${darkmod ? "text-yellow-600 tshy" : "text-gray-500 tshb"} transition-all duration-all ease-linear`}>{weather?.name}</span> </p>
                    <p className={`text-black tshb context font-bold tracking-[1px] ml-5 mt-4 text-lg`}>Humidity : <span className={`${darkmod ? "text-yellow-600 tshy" : "text-gray-500 tshb"} transition-all duration-all ease-linear`}>{weather?.main?.humidity}%</span> </p>
                    <p className={`text-black tshb context font-bold tracking-[1px] ml-5 mt-4 text-lg`}>Wind_Speed : <span className={`${darkmod ? "text-yellow-600 tshy" : "text-gray-500 tshb"} transition-all duration-all ease-linear`}>{weather?.wind?.speed} km/h</span> </p>
                </div>

                <div className={`w-full lg:w-[30%] drk_anime bshb h-[300px]  p-3 mt-8 lg:mt-0 order-2 sm:order-3 md:order-3 lg:order-2 rounded-xl ${darkmod ? "bg-black" : "bg-white"} transition-all duration-300 ease-linear`}>
                    <h1 className={`font-bold text-2xl text-center ${darkmod ? "text-white tshw" : "text-black tshb"} mt-4 context`}>Dark / <span className={`${darkmod ? "text-yellow-600 tshy" : "text-blue-600 tshb2"}`}>Light</span> mod</h1>
                    <p className={`px-2 flex mt-18 font-bold tracking-[2px] text-xl items-center context gap-2 ${darkmod ? "text-white tshw" : "text-black tshb"} transition-all duration-300 ease-linear`}><MdLightMode className='text-yellow-600 text-xl tshy' /> Light Mod</p>
                    <div className='w-full px-4 h-[50px] bg-gray-200 flex items-center justify-between rounded-xl mt-16'>
                        <p className='font-bold context'>Lights {darkmod ? "Off" : "On"} </p>
                        <Switch />
                    </div>
                </div>
                <div className={` w-full sm:w-[50%] md:w-[47%] lg:w-[30%] h-[300px] mt-8 sm:mt-0 lg:mt-0 order-3 sm:order-2 md:order-2 lg:order-3 calender_anime flex justify-center bshb ${darkmod ? "bg-white" : "bg-black"} rounded-xl items-center`}> <Calender /> </div>
            </div>
        </div>
    )
}

export default Display