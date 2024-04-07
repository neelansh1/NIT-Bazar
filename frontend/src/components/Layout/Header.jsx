import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData, productData } from "../../static/data";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import img1 from '../../Assests/logo.png'
import { BiMenuAltLeft } from "react-icons/bi"
import styles from '../../styles/styles';
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
import { CgProfile } from "react-icons/cg"

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);


  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setSearchData([]);
    } else {
      const filteredProducts = productData && productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(filteredProducts);
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section} mr-0 ml-0 w-auto` }>
        <div className='hidden lg:flex items-center justify-between h-16 px-4 bg-gray-800 text-white'>
          <div>
            <Link to='/'>
              <img src={img1} alt="Logo" className="h-10" />
            </Link>
          </div>
          {/* Search box */}
          <div className="relative">
            <input type='text' placeholder='Search Products...' value={searchTerm} onChange={handleSearchChange} className='h-[40px] w-[400px] px-4 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring focus:border-blue-300' />
            <AiOutlineSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
            {searchData && searchData.length !== 0 && (
              <div className='absolute top-full left-0 min-h-[30vh] bg-gray-900 shadow-md z-10 p-4'>
                {searchData && searchData.map((product, index) => {
                  const d = product.name;
                  const Product_name = d.replace(/\s+/g, "_");
                  return (
                    <Link to={`/product/${Product_name}`} key={index}>
                      <div className='w-full flex items-start py-3'>
                        <img src={product.image_Url[0].url} alt='' className='w-[40px] h-[40px] mr-[10px]' />
                        <h1>{product.name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          {/* Become a Seller option */}
          <div>
            <Link to="/seller" className="flex items-center text-white">
              <h1 className='mr-1 text-gray-300'>
                Become Seller
              </h1>
              <IoIosArrowForward className="text-gray-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition hidden lg:flex items-center justify-between bg-gray-300`}>

        <div className={`${styles.section} relative  ${styles.normalFlex} justify-between mr-8`}>
          {/* categories */}
          <div className='relative h-[60px] mt-[10px]  w-[270px]  hidden 1000px:block bg-gray-500' >
            <BiMenuAltLeft size={30} className='absolute top-3 left-2' />
            <button className='h-[100%] w-full flex justify-between items-center pl-10  font-sans text-lg font-[500] select-none rounded-t-md' onClick={() => setDropDown(!dropDown)}>
              All categories
              <IoIosArrowDown size={20} className='text-white' />
            </button>
            {dropDown && (
              <DropDown categoriesData={categoriesData} setDropDown={setDropDown} />
            )}
          </div>
        </div>
        {/* navbar */}
        <div className={`${styles.noramlFlex}  h-[70px]`}>
          <Navbar active={activeHeading} />
        </div>

        {/* items in right */}
        <div className={` ${styles.noramlFlex}  h-[70px]`}>
          <div className='relative cursor-pointer mr-[15px]'>
            <AiOutlineHeart size={30} className='rgb(255 2555 255/83%)' />
            <span className=' absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center'>
              0
            </span>
          </div>

          <div className='relative cursor-pointer mr-[15px]'>
            <AiOutlineShoppingCart size={30} className='rgb(255 2555 255/83%)' />
            <span className=' absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center'>
              8
            </span>
          </div>

          <div className='relative cursor-pointer mr-[15px]'>
            <Link to="/login">
              <CgProfile size={30} className='rgb(255 2555 255/83%)' />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;
