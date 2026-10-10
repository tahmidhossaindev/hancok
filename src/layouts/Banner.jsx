import React from 'react'
import Image from '../components/Common/Image'
import banner from '/src/assets/banner.png'

const Banner = () => {
  return (
    <>
    <Image imageSrc={banner} className={"w-full"}/>
    </>
  )
}

export default Banner