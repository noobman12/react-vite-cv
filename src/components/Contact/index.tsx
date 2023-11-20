import React from "react";

type Props = { phoneNumber: string; emailAddress: string; address: string };

export default function index({ phoneNumber, emailAddress, address }: Props) {
  return (
    <div className='contact flex flex-col gap-5 ml-16 mt-20 text-white font-normal text-lg'>
      <h3 className='font-bold tracking-wider text-2xl mb-5'>Contact</h3>
      <div className='phone ml-5'>
        <li className='font-semibold'>Phone</li>
        <p>{phoneNumber}</p>
      </div>
      <div className='email  ml-5'>
        <li className='font-semibold'>Email</li>
        <p>{emailAddress}</p>
      </div>
      <div className='address  ml-5'>
        <li className='font-semibold'>Address</li>
        <p>{address}</p>
      </div>
    </div>
  );
}
