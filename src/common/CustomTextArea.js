import React from 'react'

const CustomTextArea = ({handleChange, ...props}) => {
  return (
    <textarea className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize leading-6 transition-colors duration-200 ease-in-out' onChange={handleChange} {...props} />
  )
}

export default CustomTextArea