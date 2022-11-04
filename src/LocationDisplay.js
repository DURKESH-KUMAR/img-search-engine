import React from 'react';
// import ReactDOM from 'react-dom';
import northPic from './images/north.jpg';
import southPic from './images/south.gif';
import "./LocationDisplay.css";

const locationConfig={
    north:{
        text:'your are currently at north region',
        picture:northPic
    },
    south:{
        text:'you are currently at south region',
        picture:southPic
    }
}


const LocationDisplay=({latitude})=>{
    
    var region=(latitude>0) ?'north':'south';
    // var picture=(latitude>0)?northPic:southPic;
    const{text,picture}=locationConfig[region];
    return(
        <div className={region}>
          {/* <img src={picture} alt="location picture"/><br/> */}
          {/* <h1>hi your region is {region} region in coordinates{latitude}</h1> */}
          <div>
          {text}run
          </div>
          <img src={picture} alt="location picture"/><br/>
          {/* {text} */}
        </div>
    )
}
export default LocationDisplay;