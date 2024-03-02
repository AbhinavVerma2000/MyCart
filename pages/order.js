import React from 'react'
import { useRouter } from 'next/router'
import Order from '@/models/Order';
import mongoose from 'mongoose';

const MyOrder = ({order, cart, subTotal}) => {
  const router=useRouter();
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">MYCART</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: #{Math.floor(Math.random() * Date.now())}</h1>
        <p className="leading-relaxed mb-4">Your Order has been placed successfully.</p>
        <div className="flex mb-4">
          <a className="text-center flex-grow border-b-2 py-2 text-lg px-1">Description</a>
          <a className="text-center flex-grow border-b-2 py-2 text-lg px-1">Quantity</a>
          <a className="text-center flex-grow border-b-2 py-2 text-lg px-1">Price</a>
        </div>
        
        {Object.keys(cart).map((k) => {
            return (
        <div key={k} className="flex justify-between border-t border-gray-200 py-2">
          <span className="text-gray-500 w-1/3">{cart[k].name}</span>
          <span className="text-gray-900 w-1/3 text-center">{cart[k].qty}</span>
          <span className="text-gray-900 w-1/3 text-center">{cart[k].price}</span>
        </div>)})}
        <div className="flex mt-10">
          <span className="title-font font-medium text-2xl text-gray-900">₹{subTotal}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src='/logo.png'/>
    </div>
  </div>
</section>
    </div>
  )
}
export const getServerSideProps=(async(context)=>{
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let order = await Order.findById(context.query.id);

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    },
  };
})


export default MyOrder
