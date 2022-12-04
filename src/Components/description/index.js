import React from 'react'

function Description(props) {
  return (
    <div>
      <p style={style.description}  >{props.Description}</p>
    </div>
  )
}

const style = {
  description: {
    fontSize: "18px",
    color: "#8F90B6",
    marginTop:"50px",
    marginBottom:"50px"
}
}

export default Description;
