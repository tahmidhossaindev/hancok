import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Common/Image'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'
import { HiGlobeAlt } from "react-icons/hi2";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <section className=" pt-6.25 fixed font-hancok top-0 left-0 w-full m-auto">

<Container>
    <Flex className={`gap-x-113.75 justify-between`}>


<div className="leftside flex gap-x-15 items-center">
     <div className="logoPart">
        <Image imageSrc={logo} imageAlt={'Logo.png'} className={`w-full`}/>
     </div>
     
     
      <div className="menuPart">
        <ul className="flex text-[#DDDDDD] text-[16px] gap-x-7.5 items-center">
            <Link to={"/"}><li className="hover:text-[20px] hover:text-white duration-100 ease-in">Home</li></Link>
            <Link to={"/"}><li className="hover:text-[20px] hover:text-white duration-100 ease-in">About Us</li></Link>
            <Link to={"/"}><li className="hover:text-[20px] hover:text-white duration-100 ease-in">Tournament</li></Link>
            <Link to={"/"}><li className="hover:text-[20px] hover:text-white duration-100 ease-in">Store</li></Link>
            <Link to={"/"}><li className="hover:text-[20px] hover:text-white duration-100 ease-in">Team</li></Link>
            <Link to={"/"}><li className="hover:text-[20px] hover:text-white duration-100 ease-in">FAQ</li></Link>
            <Link to={"/"}><li className="hover:text-[20px] hover:text-white duration-100 ease-in">Contact Us</li></Link>
            

        </ul>
     </div>


</div>
    
<div className="rightside flex gap-x-6.75 items-center">
    <HiGlobeAlt className="text-white text-[25px] hover:text-[30px] duration-100 ease-in"/>
    <div className="siginpart flex gap-x-1.75 items-center ">
        <FaSignOutAlt className="text-white text-[18px] "/>
        <h3 className="font-hancok text-white text-[20px] hover:text-[22px] duration-100 ease-in">Sign In</h3>
    </div>
    <FaSearch className="text-white text-[25px] hover:text-[30px] duration-100 ease-in"/>
</div>



    </Flex>
</Container>



    </section>


    </>
)
}

export default Header