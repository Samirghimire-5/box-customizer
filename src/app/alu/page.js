'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const {height, width, backgroundColor} = useSelector(state=>state.box)
  return (
    <div>{height}
    <br></br>
    {width}
    <br></br>
    {backgroundColor}
    </div>
  )
}

export default page