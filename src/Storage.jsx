import React, { useContext } from 'react'
import { Appcontext } from './Context'
import Animation from "./Animted_ball"
import Coin from "./Coin"
import { GiCrossedBones } from "react-icons/gi";


function Storage() {
    let { darkmod, inp_pop, setinp_pop, handle, obj , add , arr , del , is_edit , edit_f , totalAmount} = useContext(Appcontext)

    return (
        <>
            {
                inp_pop && (
                    <div className='fixed top-0 left-0  bg-black flex justify-center items-center z-10 w-full h-screen d-bg'>
                       
                        <div className={`w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-max pb-12 py-3 ${darkmod ? "bg-black" : "bg-white"} rounded-2xl flex justify-center items-center flex-col relative`}>
                            <GiCrossedBones className={`absolute top-5 right-5 scale-110 ${darkmod ? "text-white" : "text-black"} cursor-pointer`} onClick={()=> setinp_pop(false)} />
                            <h1 className={`${darkmod ? "text-yellow-600 tshy" : "text-black tshb"} text-3xl sm:text-4xl context mt-6 font-bold sm:mt-4`}>Fill Expense Info</h1>
                            <Coin />
                            <div className="inputGroup mt-6">
                                <input type="text" required autoComplete="off" name='description' onChange={handle} value={obj.description} className='font-bold' />
                                <label htmlFor="name">Description</label>
                            </div>
                            <div className="inputGroup mt-6">
                                <input type="number" required autoComplete="off" name='amount' onChange={handle} value={obj.amount} className='font-bold' />
                                <label htmlFor="name">Amount</label>
                            </div>
                            <div className="inputGroup mt-6 relative w-[80%] mx-auto">
                                <select
                                    id="payment_method"
                                    name="payment_method"
                                    required
                                    value={obj.payment_method}
                                    onChange={handle}
                                    className="peer w-full px-[0.8em] bg-white font-bold py-[0.8em] text-md border-2 border-[rgb(200,200,200)] rounded-[20px] text-black outline-none transition-all duration-300 shadow-inner appearance-none pr-10 focus:border-[rgb(41,109,255)]"
                                >
                                    <option value="" disabled hidden></option>
                                    <option className={`${darkmod ? "bg-black text-white" : "bg-white text-black"} font-bold " value="cash`}>Cash</option>
                                    <option className={`${darkmod ? "bg-black text-white" : "bg-white text-black"} font-bold " value="bank`}>Bank</option>
                                    <option className={`${darkmod ? "bg-black text-white" : "bg-white text-black"} font-bold " value="credit`}>Credit</option>
                                </select>
                                <label htmlFor="payment_method" className="floating-label">
                                    Payment Method
                                </label>
                            </div>
                            <button className=' w-[250px] sm:w-[300px] bshb active:scale-95 transition-all duration-200 ease-linear text-xl cursor-pointer hover:bg-blue-500 py-4 bg-blue-600
                             text-white tshw mt-8 rounded-xl font-bold' onClick={add}> { is_edit ? "Update_Expense" : "Add_Expense"} </button>
                            {/* //////////////////////////////// */}
                        </div>
                    </div>
                )
            }

            <div className={`px-1 st py-2 sm:p-4 w-[90%] sm:w-[90%] mx-auto flex flex-wrap justify-center items-center transition-all duration-300 ease-linear rounded-2xl ${darkmod ? "bg-black bshb" : "bg-white bshb"} `}>
                <div className='w-[20%] h-max py-8 lg:h-[300px] flex justify-center items-center'> <Animation /> </div>
                {/* /////////////////////////////// */}
                <div className='w-full lg:w-[80%] '>
                    <div className={`w-full h-[70px] flex justify-evenly rounded-xl items-center ${darkmod ? "bg-yellow-600 bshy" : "bg-blue-500"} `}>
                        <p className={`text-sm lg:text-2xl font-bold cursor-context-menu tshw text-white `}>Description</p>
                        <p className={`text-sm lg:text-2xl font-bold cursor-context-menu tshw text-white `}>Amount</p>
                        <p className={`text-sm lg:text-2xl font-bold cursor-context-menu tshw text-white `}>Date</p>
                        <p className={`text-sm  hidden sm:block  lg:text-2xl font-bold cursor-context-menu tshw text-white `}>Payment Method</p>
                        <p className={`text-sm lg:text-2xl  hidden sm:block  font-bold cursor-context-menu tshw text-white `}>Reset</p>
                    </div>
                    <div className='w-full h-[400px] scroll_div '>
                        {
                            arr && arr.map((ele,idx)=>{
                                return(
                                    <div key={idx} className='w-[98%] flex mx-auto bg-white justify-evenly list items-center flex-wrap sm:flex-nowrap mt-3 rounded-lg bshb h-[60px] sm:h-[50px] text-xl'>
                            <div className='w-[100%] flex justify-evenly gap-5 items-center'>
                                <p className='text-sm lg:text-xl cursor-context-menu tshb font-bold '>{ele.description}</p>
                                <p className='text-sm lg:text-xl text-blue-500 tshb2 font-bold cursor-context-menu'>{ele.amount}</p>
                                <p className='text-sm  lg:text-xl cursor-context-menu tshb font-bold'>{ele.e_time}</p>
                                <p className='text-sm lg:text-xl hidden sm:block tshbg text-green-500 font-bold cursor-context-menu'>{ele.payment_method}</p>
                            </div>
                            <div className='flex justify-center items-center gap-2 '>
                                <button className="edit" onClick={()=>edit_f(idx , ele)} >Edit
                                    <svg className="svg" viewBox="0 0 512 512" >
                                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                    </svg>
                                </button>
                                <button aria-label="Delete item" className="delete-button" onClick={()=>del(idx)}>
                                    <svg
                                        className="trash-svg"
                                        viewBox="0 -10 64 74"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="trash-can">
                                            <rect
                                                x="16"
                                                y="24"
                                                width="32"
                                                height="30"
                                                rx="3"
                                                ry="3"
                                                fill="#e74c3c"
                                            ></rect>

                                            <g transformOrigin="12 18" id="lid-group">
                                                <rect
                                                    x="12"
                                                    y="12"
                                                    width="40"
                                                    height="6"
                                                    rx="2"
                                                    ry="2"
                                                    fill="#c0392b"
                                                ></rect>
                                                <rect
                                                    x="26"
                                                    y="8"
                                                    width="12"
                                                    height="4"
                                                    rx="2"
                                                    ry="2"
                                                    fill="#c0392b"
                                                ></rect>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                                )
                            })
                        }

                    </div>
                    <div className={`w-full h-[70px] flex justify-between mt-2 rounded-xl px-2 sm:px-8 items-center ${darkmod ? "bg-yellow-600 bshy" : "bg-blue-500"} `}>
                        <button className="cssbuttons-io-button hover:scale-105 transition-all duration-200 ease-linear active:scale-95 " onClick={() => setinp_pop(true)}>
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                            </svg>
                            <span className='font-bold'>Add</span>
                        </button>
                        <h1 className={` text-md sm:text-2xl tshw text-white cursor-context-menu `}>Total Price : <span className='text-white font-bold tshw'>{totalAmount} Rs</span> </h1>
                    </div>
                </div>



                {/* ./////////////////// */}
            </div>
        </>
    )
}

export default Storage