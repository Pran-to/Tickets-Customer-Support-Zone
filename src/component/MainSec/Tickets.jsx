import React from "react";

const Tickets = ({ ticket, handelCard }) => {
  const priorityStyles = {
    "HIGH PRIORITY": "text-red-600 ",
    "MEDIUM PRIORITY": "text-yellow-600 ",
    "LOW PRIORITY": "text-green-600 ",
  };
  return (
    <div
      onClick={() => {
        handelCard(ticket.id);
        
      }}
      className="card  bg-base-100 card-sm shadow-sm cursor-pointer"
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title  wrap-anywhere">{ticket.title}</h2>
          <div className="badge badge-success bg-green-200 rounded-2xl   py-4  ">
            <i className="fa-solid fa-circle text-green-600 "></i>
            {ticket.status}
          </div>
        </div>
        <p className="wrap-anywhere">{ticket.description}</p>
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <p>#{ticket.id}</p>
            <p className={`font-semibold ${priorityStyles[ticket.priority]}`}>
              {ticket.priority}
            </p>
          </div>
          <div className="flex gap-3">
            <h1>{ticket.customer}</h1>
            <p>
              <i className="fa-regular fa-calendar"></i> {ticket.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
