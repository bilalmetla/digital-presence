import React from 'react'

function Container(props) {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

const style = {
    maxWidth:"1440px",
    padding:"0 100px"

}

export default Container;
