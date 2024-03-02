import React, { useState } from "react";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import { VscClose } from "react-icons/vsc";
import { useRef } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { IoBagCheck } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart}) => {
  const [dropdown, setDropdown] = useState(false)
  const toggleDropdown=()=>{
    setDropdown(!dropdown)
  }
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
      document.querySelector("html").style.overflowY = "visible";
    }
  };
  const ref = useRef();
  return (
    <>
      <div
        ref={ref}
        className="w-72 sidebar  top-0 right-0 px-2 py-10 transform transition-transform translate-x-full bg-orange-300 h-screen z-20 fixed"
      >
        <button className="absolute right-5 top-5" onClick={toggleCart}>
          <VscClose />
        </button>
        <h2 className="text-center font-bold text-xl">Shopping Cart</h2>
        <ol className="list-decimal font-semibold mx-5">
          {Object.keys(cart).length == 0 && <div className="my-5 font-normal">Cart is Empty</div>}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name} {cart[k].size} {cart[k].variant}</div>
                  <div className="flex font-semibold items-center justify-between w-1/3">
                    <HiOutlineMinusSmall onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} />
                    {cart[k].qty}
                    <HiOutlinePlusSmall onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <Link href={'/checkout'}><button className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg items-center">
          <IoBagCheck className="mx-2" /> Checkout
        </button></Link>
        <button
          onClick={clearCart}
          className="flex mx-auto mt-3 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg items-center"
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-start shadow-md top-0 z-10 bg-white sticky">
        <div className="logo">
          <Image src="/logo.png" height={100} width={100} alt="" />
        </div>
        
        <div className="flex cart mx-5 fixed right-0 top-1">
        {user.value && <MdAccountCircle onClick={toggleDropdown} className="text-3xl my-2 mr-2 cursor-pointer" />}
          
          <button onClick={toggleCart}>
            <BsCart3 className="text-2xl my-2 ml-2" />
          </button>
          {dropdown && <div className="relative inline-block text-left">
              <div></div>

              <div
                className="absolute right-0 z-10 mt-2 w-56 top-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Link
                    href={"/myaccount"}
                    className="text-gray-700 block px-4 py-2 text-sm hover:text-orange-500"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    My Account
                  </Link>
                  <Link
                    href={"/orders"}
                    className="text-gray-700 block px-4 py-2 text-sm hover:text-orange-500"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-orange-500"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
