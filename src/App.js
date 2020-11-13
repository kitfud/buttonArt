import React from 'react';
import './App.css';

import ColorButton from './components/ColorButtonComponent';

class App extends React.Component {
render(){

function colorGrid(){
let array = []
  for(let i = 1; i<25;i++){
    array.push(<ColorButton key={i} id={i.toString()}/>)
  }
return array
}
const data = colorGrid()

  return (
    <div>{data}</div>
  )
}

}


export default App;
