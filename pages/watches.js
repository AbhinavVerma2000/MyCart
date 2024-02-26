import React from "react";
import Product from "@/models/Product";
import mongoose from "mongoose";
import Link from "next/link";

const Watches = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5"
                >
                  <Link
                    href={`/product/${products[item].slug}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-contain object-center w-full h-full block"
                      src={products[item].img}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {products[item].category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[item].title}
                    </h2>
                    <p className="mt-1">₹{products[item].price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export const getServerSideProps=(async(context)=> {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category: "Watches"});
  let watches = {};
  for (let item of products) {
    if (item.title in watches) {
      if (
        !watches[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        watches[item.title].color.push(item.color);
      }
      if (
        !watches[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        watches[item.title].size.push(item.size);
      }
    } else {
      watches[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        watches[item.title].color = [item.color];
        watches[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(watches)) },
  };
})

export default Watches;
