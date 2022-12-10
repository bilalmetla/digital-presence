import React from 'react'


function Image(props) {
  return (
    <div>
      <img  style={style.image} width={props.width} {...props} src={props.image}  />
    </div>
  )
}

const style = {
  image: {
    backgroundSize:"cover"
},
}

export default Image;
