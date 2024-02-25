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

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal}) => {
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
        <div className="nav my-3 mx-auto">
          <ul className="flex items-center space-x-2 font-bold">
            <li>
              <Link href={"/tshirts"}>Tshirts</Link>
            </li>
            <li>
              <Link href={"/hoodies"}>Hoodies</Link>
            </li>
            <li>
              <Link href={"/stickers"}>Stickers</Link>
            </li>
            <li>
              <Link href={"/mugs"}>Mugs</Link>
            </li>
          </ul>
        </div>
        <div className="flex cart mx-5 fixed right-0 top-1">
        {user.value && <MdAccountCircle onClick={toggleDropdown} className="text-3xl my-2 mr-2 cursor-pointer" />}
          
          <button onClick={toggleCart}>
            <BsCart3 className="text-2xl my-2 ml-2" />
          </button>
          {dropdown && <div className="fixed right-5 top-12 rounded-sm shadow-lg text-sm text-white bg-orange-400 w-40">
            <ul>
              <li className="text-center hover:font-semibold py-1">
                <Link href={'/myaccount'}>My Account</Link>
              </li>
              <li className="text-center hover:font-semibold py-1">
                <Link href={'/order'}>Orders</Link>
              </li>
              <li onClick={logout} className="cursor-pointer text-center hover:font-semibold py-1">
                Logout
              </li>
            </ul>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
