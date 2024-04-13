import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    const year= new Date();
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between items-center">
                            <div className="mb-4 items-center">
                                
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright {year.getFullYear()}. All Rights Reserved.
                                </p>
                            </div>
                 </div>      
                 </div>  
                 </div>               
            </div>
        </section>
  )
}

export default Footer