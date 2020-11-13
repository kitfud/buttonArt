import React from 'react';
import ColorButton from './ColorButtonComponent';


class ButtonGrid extends React.Component {
render(){

function colorGrid(){
let array = []
  for(let i = 1; i<=100;i++){
    array.push(<ColorButton  key={i} id={i.toString()}/>)
  }
return array
}
const data = colorGrid()

  return (
 
    <div style={grid}>{data}</div>

    
  )
}

}

const grid = {
  "width":"18em"
}




export default ButtonGrid;
