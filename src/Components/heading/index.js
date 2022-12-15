import React from 'react'

function Heading(props) {
  const style = {
    heading: {
      fontSize: "45px",
      color: "#282876",
     /* marginTop:"80px" */
  }
  }
  if(props.marginTop){
    style.heading.marginTop = props.marginTop
  }
  return (
      <h1 style={style.heading} >{props.text} </h1>
  )
}




export default Heading;
