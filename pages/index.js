import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({user}) {
  return (
    <div>
      <div>
        <img src="/bg.jpg"  alt="" />
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Welcome to myCart</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Find amazing products at myCart</p>
    </div>
    {!user.value && <div className="text-center">Login for your best experience</div>}
    {!user.value && <button className="flex mx-auto mt-5 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded text-lg"><Link href={"/login"}>Login</Link></button>}
  </div>
</section>
    </div>
  );
}
