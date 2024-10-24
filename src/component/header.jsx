import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom';

function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideToggle=()=>{
    setToggle(false);
  };
  const Nmicorn=[
    {
      name:"Search",
      icorn:<CiSearch/>},
    {
      name:"Offers",
      icorn:<CiDiscount1 />,
      sup:"New"},
    {
      name:"Help",},
    {
      name:"Sign in",},
    {
    name:"Cart"},
  ]
  return (
    <>
    <div>
      <div className='fade w-full h-full fixed duration-500'
           style={{
             opacity: toggle ? 1 : 0,
             visibility: toggle ? "visible" : "hidden"
             }} onClick={hideToggle}>
          <div className='bg-white w-[500px] h-full duration-[400ms] absolute' 
             style={{left: toggle ?'0%':'-100%'}} onClick={(e)=>e.stopPropagation()}>  
          </div>
      </div>
      <header className='p-[10px] shadow-xl text-[#686b78]'>
        <div className='max-w-[1300px] mx-auto flex items-center'>
          <div className='w-[70px]'>
            <Link to={"/"}>
               <img src="images/header.jpeg" className='w-full' alt='' />
            </Link>
          </div>
          <div className='text-gray-700'>
            <span className='font-bold border-b-[3px] border-black'>Biswajit</span>
            <BiChevronDown onClick={showSideMenu} className='inline font-bold text-[#ff5200]' fontSize={25} />
          </div>
          <nav className='flex list-none gap-5 ml-auto font-semi-bold text-[18px]'>
            {
              Nmicorn.map((data,index )=>{
          return<li key={index} className='flex gap-3 text-gray-700 items-center hover:text-[#ff5200]'>
                  {data.icorn}{data.name} <sup>{data.sup}</sup>
                </li>
              })
            }
          </nav>
        </div>
      </header>
    </div>
     <Outlet/>
     </>  
  );
}

export default Header;