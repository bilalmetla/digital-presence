import React from 'react'

function Heading(props) {
  return (
    <div>
      <h1 style={style.heading} >{props.text}</h1>
    </div>
  )
}

const style = {
  heading: {
    fontSize: "45px",
    color: "#282876",
    marginTop:"80px"
}
}

export default Heading;
