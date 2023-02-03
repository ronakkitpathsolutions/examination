import React from 'react'
import CustomInput from '../common/CustomInput'
import CustomTextArea from '../common/CustomTextArea'

const HomePage = () => {
  return (
    <section className='w-full xl:w-2/5 lg:w-1/2 md:w-2/3 mx-auto'>
      <CustomInput placeholder="Title" />
      <CustomTextArea placeholder="Description" />
    </section>
  )
}

export default HomePage