import React from 'react'


function Image(props) {
  return (
    <div>
      <img  style={style.image} width={props.width} {...props} src={props.image} alt={"image"}  />
    </div>
  )
}

const style = {
  image: {
},
}

export default Image;
