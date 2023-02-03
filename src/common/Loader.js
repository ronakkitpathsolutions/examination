import React from 'react'

const Loader = ({text, ...props}) => {
  return (
    <div {...props} >
        <p>{text}</p>
    </div>
  )
}

export default Loader