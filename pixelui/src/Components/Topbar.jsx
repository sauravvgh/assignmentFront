import React from 'react'
import Burger from  '../images/burger.jpg';
import Gorilla from '../images/gorillaz.jpg'
import phone from '../images/call.png'
import pointerpin from '../images/location.png'
import MagGlass from '../images/SearchMagnify.png'
const Topbar = () => {
  return (
    <>
    <div className='Topbar'>
      <div className="toprectangle">
        <div className="topleft">24 Hrs Service|365 Days</div>
        <div className="topright">Translate | Support | Help | FAQ</div>
      </div>
      <div className="Navbar">
      <div className="gorillaa">
        <img src={Gorilla} alt="" className="gorilla" />
      </div>
      <div className="Contactss">
        <div className="Grp7phone">
          985555555
        </div>
        <div className="PhoneImages">
          <img src={phone} alt="" className="fellytone" />
        </div>
        <div className="locationdestination">Kathmandu, Nepal</div>
        <div className="pinpointer">
          <img src={pointerpin} alt="" className="pointerpin" />
        </div>
      </div>
      <div className="searchbar">
        <div className="magnify">
          <img src={MagGlass} alt="" className="magchasma" />
          <div className="inputfield">search your food
          </div>
        </div>
      </div>
      <div className="LoginText">Login</div>

    </div>
    </div>
    <img src={Burger} className="burgerrimg" alt="" />
    
</>
    
  )
}

export default Topbar
