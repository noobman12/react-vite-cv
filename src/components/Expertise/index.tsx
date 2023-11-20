import React from "react";
import ExpertCount from "./ExpertCount";

type Props = {
  expertise1: string;
  expertise2: string;
  expertise3: string;
  expertise4: string;
  expertise5: string;
  exertise1Count: number;
  exertise2Count: number;
  exertise3Count: number;
  exertise4Count: number;
  exertise5Count: number;
};

export default function index({
  expertise1,
  expertise2,
  expertise3,
  expertise4,
  expertise5,
  exertise1Count,
  exertise2Count,
  exertise3Count,
  exertise4Count,
  exertise5Count,
}: Props) {
  // eslint-disable-next-line prefer-const
  return (
    <div className='contact flex flex-col gap-5 ml-16 mt-20 text-white font-normal text-lg'>
      <h3 className='font-bold tracking-wider text-2xl mb-5'>EXPERTISE</h3>
      <div className='ml-5'>
        <span className='font-normal flex items-baseline gap-20'>
          <div className='w-[80px]'> {expertise1}</div>

          <ExpertCount expertCount={exertise1Count}></ExpertCount>
        </span>
      </div>
      <div className='ml-5'>
        <span className='font-normal flex items-baseline gap-20'>
          <div className='w-[80px]'> {expertise2}</div>

          <ExpertCount expertCount={exertise2Count}></ExpertCount>
        </span>
      </div>
      <div className='ml-5'>
        <span className='font-normal flex items-baseline gap-20'>
          <div className='w-[80px]'> {expertise3}</div>

          <ExpertCount expertCount={exertise3Count}></ExpertCount>
        </span>
      </div>
      <div className='ml-5'>
        <span className='font-normal flex items-baseline gap-20'>
          <div className='w-[80px]'> {expertise4}</div>

          <ExpertCount expertCount={exertise4Count}></ExpertCount>
        </span>
      </div>
      <div className='ml-5'>
        <span className='font-normal flex items-baseline gap-20'>
          <div className='w-[80px]'>{expertise5}</div>

          <ExpertCount expertCount={exertise5Count}></ExpertCount>
        </span>
      </div>
    </div>
  );
}
