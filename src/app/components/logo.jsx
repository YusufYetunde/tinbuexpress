import React from 'react'
import Image from 'next/image';
import LogoImg from "../../images/Logo.png";

const Logo = () => {
  return (
    <Image
      src={LogoImg}
      width={200}
      height={36}
      alt="Logor"
    />
  )
}

export default Logo