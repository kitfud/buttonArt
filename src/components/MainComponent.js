import React from 'react';
import ButtonGrid from './ColorGridComponent';
import Header from './HeaderComponent';
import '../App.css';

class Main extends React.Component {
render(){

  return (
      <React.Fragment>
      <div className = "container">
      <div className="row vcenter">
      <Header/>
      <ButtonGrid/>
      </div>
       
          </div>

      </React.Fragment>

  )

}

}




export default Main
