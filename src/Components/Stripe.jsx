import React from 'react'

function Stripe({val}) {
   
      
  return (
    // w-[!6.66%]-> divide w into 6 stripes equally and take full width
    <div className='w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex justify-between item-center'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
