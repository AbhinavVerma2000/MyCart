import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter()
  
  useEffect(()=>{
    const fetchOrders= async()=>{
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: localStorage.getItem('token')})
      })
      let res = await a.json()
    }
    if(!localStorage.getItem('token')){
      router.push('/')
    }
    else{
      fetchOrders()
    }
  })

  return (
    <div>
      <div className="container">
        <h1 className="font-bold text-2xl mx-40 my-10">My Orders</h1>
        <div className="flex flex-col mx-40">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          First
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Last
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 dark:hover:text-white">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 dark:hover:text-white">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 dark:hover:text-white">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Orders;