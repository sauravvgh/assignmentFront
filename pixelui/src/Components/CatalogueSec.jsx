import React from 'react'
import chiyathakali from '../images/chiyaThakali.png'
import bhaat from '../images/bhaat.png'
import softdrink from '../images/softdrink.png'
import coffee from '../images/coffee.png'
import frenchfries from '../images/frenchfries.png'
import seafood from '../images/seafood.png'
import raksi from '../images/raksi.png'
const CatalogueSec = () => {
  return (
   <>
    <div className="MainCatalogueGroup258">
        <div className="CatalogueTitles">Catalog Sections delicacies</div>
        <div className="cat1">
        <div className="smallcat1">
            <img src={chiyathakali} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu1">Breakfast set</div>
        </div>
        <div className="cat2">
        <div className="smallcat2">
            <img src={bhaat} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu2">Lunch set</div>
        </div>

        <div className="cat3">
        <div className="smallcat3">
            <img src={softdrink} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu3">Soft drinks</div>
        </div>
        <div className="cat4">
        <div className="smallcat4">
            <img src={bhaat} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu4">Lunch Khaja</div>
        </div>
       
        <div className="cat5">
        <div className="smallcat5">
            <img src={coffee} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu5">Coffee</div>
        </div>
        <div className="cat6">
        <div className="smallcat6">
            <img src={frenchfries} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu6">French Fries</div>
        </div>

        <div className="cat7">
        <div className="smallcat7">
            <img src={seafood} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu7">Sea Food</div>
        </div>
        <div className="cat8">
        <div className="smallcat8">
            <img src={raksi} alt="" className="chiyaThakali" />
        </div>
        <div className="textMenu8">Beverages</div>
        </div>
    </div>

   </>
  )
}

export default CatalogueSec
