import React from 'react';

const Tickets = () => {
    return (
     <div className="card w-96 bg-base-100 card-sm shadow-sm">
         <div className="card-body">
            <div className='flex justify-between'>
                 <h2 className="card-title">Small Card</h2>
                <div class="badge badge-success bg-green-200 rounded-2xl  font-semibold"><i class="fa-solid fa-circle text-green-600 "></i>Open
                </div>
            </div>
                 <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
             <div className='flex justify-between '>
                <div className='flex gap-3'>
                    <p>#1003</p>
                    <p className='text-red-600 font-semibold'>HIGH PRIORITY</p>

                </div>
                <div className='flex gap-3'>
                    <h1>John Smith</h1>
                    <p><i class="fa-regular fa-calendar"></i> 1/15/2024</p>
                </div>

             </div>
            
         </div>
    </div>
    );
};

export default Tickets;