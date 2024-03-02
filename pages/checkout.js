import React from "react";
import { MdPayment } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const Checkout = ({ cart, subTotal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [disabled, setDisabled] = useState(true)
  const handleChange=(e)=>{
    if(e.target.name=='name'){
      setName(e.target.value)
    }else if(e.target.name=='email'){
      setEmail(e.target.value)
    }else if(e.target.name=='address'){
      setAddress(e.target.value)
    }else if(e.target.name=='phone'){
      setPhone(e.target.value)
    }else if(e.target.name=='state'){
      setState(e.target.value)
    }else if(e.target.name=='city'){
      setCity(e.target.value)
    }else if(e.target.name=='pincode'){
      setPincode(e.target.value)
    }
    if(name && email && address && phone && pincode){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }
  return (
    <div className="mx-10">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex flex-col md:flex-row my-5">
        <div className="px-2 w-auto md:w-1/3">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-auto md:w-1/3">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-auto md:w-1/2">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            cols={30}
            rows={3}
            id="address"
            name="address"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto flex flex-col md:flex-row my-5">
        <div className="px-2 w-auto md:w-1/3">
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="phone" value={phone}
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-auto md:w-1/3">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text" value={city}
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col md:flex-row my-5">
        <div className="px-2 w-auto md:w-1/3">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text" value={state}
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-auto md:w-1/3">
          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="email"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl">2. Review Cart Items</h2>
      <ol className="list-decimal font-normal mx-10">
        {Object.keys(cart).length == 0 && (
          <div className="my-5 font-normal">Cart is Empty</div>
        )}
        {Object.keys(cart).map((k) => {
          return (
            <li key={k}>
              <div className="item flex my-5">
                <div className="w-1/4 font-normal">{cart[k].name}</div>
                <div className="flex font-normal items-center justify-between w-1/4">
                  {cart[k].qty}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <span className="my-5">Total: ₹{subTotal}</span>
      <Link href={"/order"}><button disabled={disabled} className="disabled:bg-orange-300 flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded text-lg items-center">
        <MdPayment className="mx-2" />Proceed to Pay ₹{subTotal}
      </button></Link>
    </div>
  );
};

export default Checkout;
