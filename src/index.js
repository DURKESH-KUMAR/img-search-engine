// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import LocationDisplay from './LocationDisplay';

// const App=()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=>console.log(position),
//     (error)=>console.log(error)
//   );
//   return(
//     <h1>geo location</h1>
//   )
// }\
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={latitude:null, errorMessage:''}
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{this.setState({
        latitude:position.coords.latitude
      })},
      (error)=>{this.setState({
        errorMessage:error.message
      })}
    )
  }
  render(){
    // window.navigator.geolocation.getCurrentPosition(
    //   (position)=>console.log(position),
    //   (error)=>console.log(error)
    // )
    // return(
    //   <div>my latitude  {this.state.latitude}</div>
    // )
    if(this.state.errorMessage && !this.state.latitude){
      return <div>
        error:{this.state.errorMessage}
      </div>
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <div>
        {/* latitude:{this.state.latitude} */}
        <LocationDisplay latitude={this.state.latitude}/>
      </div>
    }else{
      return <div>
        waiting for user information
      </div>
    }
  }
}




ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

