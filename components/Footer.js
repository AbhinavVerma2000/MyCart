import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src="/logo.png" width={100} height={100} alt="" />
            </a>
            <p className="mt-2 text-sm text-gray-500 px-4">
            Find amazing products at myCart
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/tshirts'} className="text-gray-600 hover:text-gray-800">T-shirts</Link>
                </li>
                <li>
                  <Link href={'/hoodies'} className="text-gray-600 hover:text-gray-800">Hoodies</Link>
                </li>
                <li>
                  <Link href={'/mugs'} className="text-gray-600 hover:text-gray-800">Mugs</Link>
                </li>
                <li>
                  <Link href={'/stickers'} className="text-gray-600 hover:text-gray-800">Stickers</Link>
                </li>
                <li>
                  <Link href={'/appliances'} className="text-gray-600 hover:text-gray-800">Appliances</Link>
                </li>
                <li>
                  <Link href={'/watches'} className="text-gray-600 hover:text-gray-800">Watches</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONNECT WITH US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'https://www.instagram.com/abhinav_verma2000'} className="text-gray-600 hover:text-gray-800">Instagram</Link>
                </li>
                <li>
                  <Link href={'https://www.linkedin.com/in/abhinav-verma-59863b201'} className="text-gray-600 hover:text-gray-800">LinkedIn</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="justify-center container py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Abhinav
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
