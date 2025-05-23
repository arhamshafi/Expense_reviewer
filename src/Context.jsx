import React, { createContext, useEffect, useState } from 'react'

export let Appcontext = createContext()

function Context({ children }) {

  let [city, setCity] = useState("Lahore")
  let [weather, setweather] = useState({})
  let [loader, setloader] = useState(false)
  useEffect(() => {
    fetch_f()
  }, [city])

  let [darkmod, setdarkmod] = useState(false)
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let hour12 = hours % 12 || 12;
  let time = `${hour12 < 10 ? '0' + hour12 : hour12}:${minutes < 10 ? '0' + minutes : minutes}`;

  let day = now.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  let date = now.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  let greeting = '';
  if (hours >= 5 && hours < 12) {
    greeting = 'Good Morning';
  } else if (hours >= 12 && hours < 18) {
    greeting = 'Good Afternoon';
  } else if (hours >= 18 && hours < 22) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Night';
  }

  function toogle() {
    setdarkmod(!darkmod)
  }

  async function fetch_f() {
    try {
      setloader(true)
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f65e32faa80c40a876bd4112cd36e525`)
      let data = await response.json()
      setweather(data)
    }
    catch {
      console.log("API is Not Working");
    }
    finally {
      setloader(false)
    }
  }

  let [inp_pop, setinp_pop] = useState(false)
  let [obj, setobj] = useState({ description: "", amount: "", payment_method: "" })
  let [is_edit, setis_edit] = useState(false)
  let [edit_index, setedit_index] = useState(null)
  let [arr, setarr] = useState(
    localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : []
  )
  // console.log(arr);

  function handle(e) {
    let { name, value } = e.target
    setobj({ ...obj, [name]: value })
  }

  function add() {
    if (!obj.amount || !obj.description || !obj.payment_method) {
      alert("Input Cannot Be Empty")
      return;
    }
    if (is_edit) {
      let updatedArr = [...arr];
      updatedArr[edit_index] = { ...obj, e_time: date };
      let sorted = updatedArr.sort((a, b) => Number(b.amount) - Number(a.amount));
      setarr(sorted);
      localStorage.setItem("expense", JSON.stringify(sorted));
      setis_edit(false);
      setedit_index(null);
      setinp_pop(false)
    }
    else {

      let new_obj = { ...obj, e_time: date }
      setinp_pop(false)
      let update = [...arr, new_obj].sort((a, b) => Number(b.amount) - Number(a.amount));
      setarr(update)
      localStorage.setItem("expense", JSON.stringify(update))
    }
    setobj({ description: "", amount: "", payment_method: "" })
  }

  function del(index) {
    let filter = arr.filter((ele, idx) => idx !== index)
    setarr(filter)
    localStorage.setItem("expense", JSON.stringify(filter))

  }

  function edit_f(index, ele) {
    setedit_index(index)
    setinp_pop(true)
    setis_edit(true)
    setobj({ description: ele.description, amount: ele.amount, payment_method: ele.payment_method })
  }
  let totalAmount = arr.reduce((acc, curr) => acc + Number(curr.amount), 0);



  return (
    <Appcontext.Provider value={{
      darkmod,
      time,
      day,
      date,
      greeting,
      toogle,
      loader,
      weather,
      inp_pop, setinp_pop,
      handle,
      obj,
      add,
      arr,
      del,
      is_edit,
      edit_f,
      totalAmount
    }} >
      {children}
    </Appcontext.Provider>
  )
}

export default Context