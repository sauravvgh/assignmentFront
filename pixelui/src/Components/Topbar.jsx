import React from 'react'
import Burger from  '../images/burger.jpg';

const Topbar = () => {
  return (
    <>
    <div className='Topbar'>
      <div className="toprectangle">
        <div className="topleft">24 Hrs Service|365 Days</div>
        <div className="topright">Translate | Support | Help | FAQ</div>
      </div>
      <div className="Navbar">
      
      <div className="login">Login</div>
        <div className="Group354">
                <div className="logo">LOGO</div>  
        </div>
       <div className="G8">
        <div className="G7">
            <h2 className="phoneText">984000000</h2>
            <div className="callicon">
            </div>  
        </div>
        <h2 className="G6">Kathmandu, Nepal</h2>
        <div className="pinpointericon">
            <img src="" alt="" className="pin" />
        </div>
       </div> 

    </div>
    </div>
    <img src={Burger} className="burgerrimg" alt="" />
    
</>
    
  )
}

export default Topbar
