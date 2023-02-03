import React from 'react'

const CustomForm = ({children, ...props}) => {
  return (
    <section {...props} >
        {children}
    </section>
  )
}

export default CustomForm