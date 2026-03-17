import React, { use } from 'react';
import Tickets from './MainSec/Tickets';

const MainSec = ({ticketsProp}) => {
    const allTickets = use(ticketsProp)
 
    return (
        <div className='max-w-300 px-7 flex md:mx-7'>
            <div className='md:grid grid-cols-2 space-y-3 gap-5 '>
                {
                    allTickets.map((ticket,i) =>  <Tickets ticket={ticket} key={i}  ></Tickets>)
                }
              
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default MainSec;