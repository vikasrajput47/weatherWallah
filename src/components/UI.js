import "./UI.css";
import cloudy from "./img/cloudy.png";
import git from './img/git.png'
import codechef from './img/codechef.png'
import gfg from './img/gfg.png'
import hr from './img/hr.png'
import In from './img/in.png'
import WeatherComponent from "./WeatherComponent";
import React, { useState } from 'react';
import API from "./API";

function UI() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(inputValue);
    // Process the input value as needed
  };

  var [check,setCheck]=useState(true);
  const getTemp=()=>{
    const inputElement = document.getElementById('myInput');
    setInputValue( inputElement.value);
    setCheck(false);
  };

  return (
    <div>
      <div className="navBar">
        <div className="name">
          <li className="navItems">
            <img src={cloudy} alt="" />
          </li>
          <li className="navItems">
            <a href="/">Weather Wallah!</a>
          </li>
        </div>
        <ul className="nav">
          <form action="" onSubmit={handleSubmit} className="nav">
            <li className="navItems">
              <input type="text" id="myInput" placeholder="find weather" />
            </li>
            <li className="navItems">
              <button type="submit" onClick={getTemp} className="btn">
                Submit
              </button>
            </li>
          </form>
        </ul>
      </div>
     
      {
        check ? <WeatherComponent/> : <API city={inputValue}/>
      }
      
      {/* footerSection */}
      <footer className={check ? 'footer' : 'footer1'}>
        <div className="footerContent">Made By Vikas</div>
        <div className="footerContent">
            <ul className="contactCol">
              <li className="contact"><a href="https://github.com/vikasrajput47" target="_blank"><img src={git} alt="" /></a></li>
              <li className="contact"><a href="https://www.linkedin.com/in/vikas-rajpoot-0908991b7/" target="_blank"><img src={In} alt="" /></a></li>
              <li className="contact"><a href="https://www.codechef.com/users/vikasrajpoot47" target="_blank"><img src={codechef} alt="" /></a></li>
              <li className="contact"><a href="https://auth.geeksforgeeks.org/user/vikasrajpoot479" target="_blank"><img src={gfg} alt="" /></a></li>
              <li className="contact"><a href="https://www.hackerrank.com/vikasrajpoot479?hr_r=1" target="_blank"><img src={hr} alt="" /></a></li>
            </ul>
        </div>
      </footer>
    </div>
  );
}

export default UI;
