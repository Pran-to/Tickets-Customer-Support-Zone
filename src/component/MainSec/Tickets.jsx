import React from 'react';

const Tickets = ({ticket}) => {
//       {
//     "id": 1010,
//     "title": "Search function not returning results",
//     "description": "Search queries return empty results incorrectly.",
//     "customer": "Lamia Chowdhury",
//     "priority": "medium",
//     "status": "open",
//     "createdAt": "3/7/26"
//   },
    return (
     <div className="card  bg-base-100 card-sm shadow-sm">
         <div className="card-body">
            <div className='flex justify-between'>
                 <h2 className="card-title">{ticket.title}</h2>
                <div className="badge badge-success bg-green-200 rounded-2xl  font-semibold"><i className="fa-solid fa-circle text-green-600 "></i>{ticket.status}
                </div>
            </div>
                 <p>{ticket.description}</p>
             <div className='flex justify-between '>
                <div className='flex gap-3'>
                    <p>#{ticket.id}</p>
                    <p className='text-red-600 font-semibold'>{ticket.priority} PRIORITY</p>

                </div>
                <div className='flex gap-3'>
                    <h1>{ticket.customer}</h1>
                    <p><i className="fa-regular fa-calendar"></i> {ticket.createdAt}</p>
                </div>

             </div>
            
         </div>
    </div>
    );
};

export default Tickets;