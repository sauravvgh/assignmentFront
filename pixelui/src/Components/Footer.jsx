import React from 'react'
import EsewaLogo from '../images/esewalogo.png'
import khalti from '../images/khalti.png'
import imepay from '../images/imepay.png'
import linkedin from '../images/linkedin.png'
import facebookimg from '../images/facebook.png'
import twitterimg from '../images/twitter.jpg'
import instalogo from '../images/Instagram-Logo.png'
const Footer = () => {
  return (
    <>
      <div className="MainFooter">
        <div className="Group274submenu"> 
        <div className="GroupCategories">
            <div className="Categoriess">Categories</div>
            <div className="breakfasttext">Breakfast</div>
            <div className="souptext">Soup</div>
            <div className="organicsalad">Organic Salad</div>
            <div className="spizza">Signature Pizza</div>
            <div className="hnhpizza">Half n Half Pizza</div>
            <div className="antipasta">Anti pasta</div>
            <div className="spenne">Spaghetti and Penne</div>
        </div>
        
        <div className="Group113UsefulLinks">
            <div className="Usefultitle">Useful Links</div>
            <div className="about">About</div>
            <div className="Careerss">Careers</div>
            <div className="Blogs">Blog</div>
            <div className="Press">Press</div>
            <div className="Lead">Lead</div>
            <div className="Value">Value</div>
        </div>
       
        </div>
        <div className="Group273submenu">
            <div className="PaymentPartners">Payment Partners</div>
            <div className="EsewaMain">
                <img src={EsewaLogo} alt="" className="esewalogo" />
            <div className="esewaName">eSewa</div>
            <div className="esewainstruction">Pay using e-sewa digital wallet</div>
            </div>
            <div className="KhaltiMain">
                <img src={khalti} alt="" className="khaltimg" />
                <div className="ktitle">Khalti Digital Wallet</div>
                <div className="khaltinfo">Pay using khalti digital wallet</div>
            </div>
            <div className="imepayMain">
                <img src={imepay} alt="" className="imepayimg" />
                <div className="imetitle">IME Pay</div>
                <div className="imeinfo">Pay using IME digital wallet</div>
            </div>
        </div>
        <div className="line"></div>
        <div className="Group265submenu">
        <div className="trademark">© test Private Limited 2022</div>
        <div className="terditions">Terms & conditions | Privacy policy</div>
        <div className="footerlogosmain">
            <img src={facebookimg} alt="" className="facebook" />
            <img src={instalogo} alt="" className="instagram" />
            <img src={twitterimg} alt="" className="twitter" />
            <img src={linkedin} alt="" className="linkedin" />
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
