import React, { useState, useEffect, useRef, useCallback } from 'react';
import './style.css'
import ScootersAPI from './ScootersAPI'

const App = () => {
  const [hour, setHour] = useState(29);
  const [min, setMin] = useState(33);
  const [sec, setSec] = useState(28);
  const [today, setToday] = useState(new Date())
  const days=[0, 1, 2, 3, 4, 5, 6]

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec > 0) {
          return prevSec - 1;
        } else {
          setMin((prevMin) => (prevMin > 0 ? prevMin - 1 : 59));
          if (min === 0) {
            setHour((prevHour) => (prevHour > 0 ? prevHour - 1 : 0));
          }
          return 59;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [min]);

  return (
    <>
      <div className='h-[50px] bg-[#1a1a1a] text-[13px] font-bold italic text-white text-center'>
        <span className='inline-block mt-[14px]'>Get Benefits of upto ₹15,000. Valid till</span>
        <span className='text-green-500 ml-[10px] inline-block mt-[14px]'>
          {` ${hour}h:${min}m:${sec}s`}
        </span>

        <span className='inline-block mt-[14px]'>
          <button className=' text-gray-400 inline-block w-[20px] h-[5px] py-[0px]'><i class="fa-solid fa-xmark"></i></button>
        </span>
      </div>

      <div id='top'>
        <div id='topBox1'>
          <div>
            OLA<br/>
            <h1>Electric rush now extended</h1>
            <h2>Enjoy benefits of upto ₹22,000* with the ola s1</h2>
            <hr></hr>
            <h3>Valid till 31st july</h3>
          </div>
        </div>

        <div id='topBox2'>
          <div id='nav'>
            <button><i class="fa-solid fa-bars"></i></button>
          </div>
          <div id='form'>
            <h1>Get in touch with us</h1>
            <h5>Please fill in your details</h5><br/>
            <form>
              <input type='text' placeholder='Phone Number' class="inputs"></input><br/>
              <input type='text' placeholder='Name' class="inputs"></input><br/>
              <select class='date'>
                <option value='Date of visit'>Date of visit</option>
                {
                  days.map((d)=>{
                    return(
                      <>
                        {/* {setToday(today+d)} */}
                        {console.log(today.getDate()+1)}
                        <option value={(today.getDate()+d)+"-"+today.getMonth()+"-"+today.getFullYear()}>{today.getDate()+d}-{today.getMonth()+1}-{today.getFullYear()}</option>
                      </>
                    )
                  })
                }
              </select>
              <input type='text' placeholder='Pincode' class='pincode'></input><br/>
              <select class='inputs'>
                <option className='purchaseDate'>When would you like to make the purchase?</option>
                <option className='purchaseDate'>Within the next 7 days</option>
                <option className='purchaseDate'>Within the next 15 days</option>
                <option className='purchaseDate'>Within the next 30 days</option>
                <option className='purchaseDate'>Haven't decided</option>
              </select><br/>
              <select class='inputs'>
                <option>Select the preferred experience center</option>
              </select>
              <button class='confirm'>Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>

      <div id="box2">
        Move over Petrol.<br/>
        Switch to the OLA S1.
      </div>

      <div id='box3'>
        {
          ScootersAPI.map((s)=>{
            return (
              <>
                <div class='scooter'>
                  <img src={s.image} class='sImg' alt={s.name}></img><br/>
                  <span class='logo'>OLA <span class='sName'>{s.name}</span></span><br/>
                  <h2 class='message'>{s.message}</h2><br/>
                  <h2 class='warranty'>{s.warranty}</h2>
                  <hr class='hr'></hr>
                  <h2 class='at'>{s.at}</h2>
                  <h2 class='emiPrice'>{s.emiPrice}</h2>
                  <h2 class='or'>OR<span class='cashPrice'>{s.cashPrice}</span><span class='canceledPrice'>{s.canceledPrice}</span></h2>
                  <button class='explore'>Explore {s.name} →</button><br/>
                  <button class='video'>Video Brochure</button>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App