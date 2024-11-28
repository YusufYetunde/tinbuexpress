import React from 'react'
import Logo from './logo'
import Image from 'next/image';
import Link from 'next/link'
import MenuIcon from "../../images/menu.png";
import SearchIcon from "../../images/search.png"
import ShoppingIcon from "../../images/shopping-cart.png"

const Navbar = () => {
  return (
    <div className='w-full h-[80px] px-[40px] py-[20px] border-b-2 flex space-between '>
        <Logo/>

        <div className=''>
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
            <Link href="">Designers</Link>
        </div>
        <div className=' flex flex-row'>
            <Link href="">
            <Image src={MenuIcon} alt=""/>
            </Link>
            <Link href="">
            <Image src={SearchIcon} alt=""/>
            </Link>
            <div className='border-l-2'>
            <Link href="">
            <Image src={ShoppingIcon} alt=""/>
            </Link>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar