import React from 'react';
 
function Header() {
  const message = "Leave a message as a pattern!" 
  const instructions = "Click the grid to change the color of a tile:"

  return (
  <React.Fragment>
 <h1 style={text}>{message}</h1>
  <h2 style={text}>{instructions}</h2>
  </React.Fragment>
 
  )
}

const text = {
    "textAlign":"center",
    "textJustify": "interWord",
    "marginBottom":"25px"
}
 
export default Header;