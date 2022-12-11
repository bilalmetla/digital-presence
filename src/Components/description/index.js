import React from 'react'

function Description(props) {
  const style = {
    description: {
      fontSize: "18px",
      color: "#8F90B6",
       marginTop:"50px",
       marginBottom:"50px"
      // margin: "0px 0px 2px 0px"
  }
  }
  if(props.marginTop){
    style.description.marginTop = props.marginTop

  }
  if(props.marginBottom){
    style.description.marginBottom = props.marginBottom

  }
  return (

      <p style={style.description}  >{props.Description}</p>

  )
}



export default Description;
