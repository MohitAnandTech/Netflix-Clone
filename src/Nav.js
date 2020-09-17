import React, { useState, useEffect } from 'react'
import "./Nav.css";

function Nav() {
const [show, handleShow] = useState(false); 
    useEffect(() => {
      window.addEventListener("scroll", ()=>{
          if(window.scrollY>100){
              handleShow(true);
          }
          else handleShow(false);
      });
      return()=>{
          window.removeEventListener("scroll");
      };  
        
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
         <img
         className="nav__logo"
         src="https://lh3.googleusercontent.com/proxy/DvdnRE_PbJnO0RmjICFhaZ8a7k1vWVbsmNNpuudF9-5B2trTk0673K1Dfvj5f8FfuK8WBI0AKeCw9t-l8467v7P2ewPlEk16wDQzMsq65ybJhfXhRmM" 
         alt="Netflix Logo"
         />    

         <img className="nav__avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
         alt="Netflix profile Logo"/>
        </div>
    )
}

export default Nav
