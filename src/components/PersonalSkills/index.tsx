import React from "react";

export default function index() {
  return (
    <div className='contact flex flex-col gap-5 ml-16 mt-20 text-white font-normal text-lg'>
      <h3 className='font-bold tracking-wider text-2xl mb-5'>Contact</h3>
      <div className='phone ml-5'>
        <li className='font-semibold'>Public Speaking</li>
      </div>
      <div className='email  ml-5'>
        <li className='font-semibold'>Financial Management</li>
      </div>
      <div className='address  ml-5'>
        <li className='font-semibold'>Creative Idea</li>
      </div>
    </div>
  );
}
