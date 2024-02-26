import Product from "@/models/Product";
import { useRouter } from "next/router";
import { useState } from "react";
import mongoose from "mongoose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page({ addToCart, product, variants }) {
  const router = useRouter();
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const checkServiceability = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
      toast.success("Pincode is Serviceable!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setService(false);
      toast.error("Sorry! Pincode is not Serviceable.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const refreshVariant=(newsize)=>{
    setSize(newsize)
    let k = Object.keys(variants[newsize])
    setColor(k[0])
    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newsize][k[0]]['slug']}`
    router.push(url)
  }
  const refreshColor=(newcolor)=>{
    setColor(newcolor)
    console.log(Object.keys(variants[size]))
    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[size][newcolor]['slug']}`
    router.push(url)
  }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container px-5 py-24">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-1/3 lg:h-auto h-auto object-contain object-center rounded mx-auto"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.title}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.tagline}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="hover:text-orange-500 w-4 h-4 hover:fill-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="hover:text-orange-500 w-4 h-4 hover:fill-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="hover:text-orange-500 w-4 h-4 hover:fill-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 hover:text-orange-500 hover:fill-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="hover:text-orange-500 w-4 h-4 hover:fill-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                
              </div>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants[size]).includes('maroon') && <button onClick={()=>{refreshColor('maroon')}} className={`border-2 bg-red-900 rounded-full w-6 h-6 focus:outline-none hover:border-gray-500 ${color==='maroon'?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants[size]).includes('olive green') && <button onClick={()=>{refreshColor('olive green')}} className={`border-2 ml-1 bg-lime-900 rounded-full w-6 h-6 focus:outline-none hover:border-gray-500 ${color==='olive green'?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants[size]).includes('navy blue') && <button onClick={()=>{refreshColor('navy blue')}} className={`border-2 ml-1 bg-blue-950 rounded-full w-6 h-6 focus:outline-none hover:border-gray-500 ${color==='navy blue'?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants[size]).includes('lilac') && <button onClick={()=>{refreshColor('lilac')}} className={`border-2 ml-1 bg-violet-400 rounded-full w-6 h-6 focus:outline-none hover:border-gray-500 ${color==='lilac'?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants[size]).includes('black') && <button onClick={()=>{refreshColor('black')}} className={`border-2 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none hover:border-gray-500 ${color==='black'?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants[size]).includes('white') && <button onClick={()=>{refreshColor('white')}} className={`border-2 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none hover:border-gray-500 ${color==='white'?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants[size]).includes('pink') && <button onClick={()=>{refreshColor('pink')}} className={`border-2 ml-1 bg-pink-400 rounded-full w-6 h-6 focus:outline-none hover:border-gray-500 ${color==='pink'?'border-black':'border-gray-300'}`}></button>}

                </div>
                <div className="flex ml-6 items-center">
                  {(Object.keys(variants).includes('S')||Object.keys(variants).includes('M')||Object.keys(variants).includes('L')||Object.keys(variants).includes('XL')||Object.keys(variants).includes('2XL')) && <span className="mr-3">Size</span>}
                  {(Object.keys(variants).includes('S')||Object.keys(variants).includes('M')||Object.keys(variants).includes('L')||Object.keys(variants).includes('XL')||Object.keys(variants).includes('2XL')) && <div className="relative">
                    <select value={size} onChange={(e)=>{refreshVariant(e.target.value)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base pl-3 pr-10">
                      {Object.keys(variants).includes('S') && <option value={'S'}>S</option>}
                      {Object.keys(variants).includes('M') && <option value={'M'}>M</option>}
                      {Object.keys(variants).includes('L') && <option value={'L'}>L</option>}
                      {Object.keys(variants).includes('XL') && <option value={'XL'}>XL</option>}
                      {Object.keys(variants).includes('2XL') && <option value={'2XL'}>2XL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>}
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}
                </span>
                <button
                  onClick={() => {
                    addToCart(
                      router.query.slug,
                      product.availableQty,
                      product.price,
                      product.title,
                      product.size,
                      product.color
                    );
                  }}
                  className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  placeholder="Enter your Pincode"
                  onChange={onChangePin}
                  className="px-2 border-2 border-gray-400 rounded-md"
                  type="text"
                />
                <button
                  onClick={checkServiceability}
                  className=" text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-700">
                  Sorry! Service is not available
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700">
                  Fortunately! Service is available
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: product.title });
  let sizeColorSlug = {};
  for (let item of variants) {
    if (Object.keys(sizeColorSlug).includes(item.size)) {
      sizeColorSlug[item.size][item.color] = { slug: item.slug };
    } else {
      sizeColorSlug[item.size] = {};
      sizeColorSlug[item.size][item.color] = { slug: item.slug };
    }
  }
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(sizeColorSlug)),
    },
  };
}