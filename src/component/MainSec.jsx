import React, { use } from "react";
import Tickets from "./MainSec/Tickets";
import Task from "./MainSec/Task";
import Resolved from "./MainSec/Resolved";

const MainSec = ({
  ticketsProp,
  handelCard,
  taskStatus,
  handelComplete,
  resolveStatus,
}) => {
  const allTickets = use(ticketsProp);

  return (
    <div
      id="Main"
      className="max-w-300 px-7 md:flex md:mx-7 gap-5 md:flex-row-reverse"
    >
      {/* Task section */}
      <div className="flex-1">
        <h1 className="mb-4 text-xl font-semibold">Task Status</h1>
        <div>
          {taskStatus.length == 0
            ? "Select a ticket to add to Task Status"
            : taskStatus.map((task, i) => (
                <Task
                  handelComplete={handelComplete}
                  allTickets={allTickets}
                  task={task}
                  key={i}
                ></Task>
              ))}
        </div>

        <h1 className="my-5 text-xl font-semibold">Resolved Task</h1>
        <div >
          {
            resolveStatus.length == 0 ? "No resolved tasks yet":
          resolveStatus.map((re, i) => (
            <Resolved allTickets={allTickets} re={re} key={i}></Resolved>
          ))}
        </div>
      </div>

      {/* Tickets card section  */}
      <div>
        <h1 className="mb-4 text-xl font-semibold">Customer Tickets</h1>
        <div className="md:grid grid-cols-2 space-y-3 gap-5 ">
          {allTickets.map((ticket, i) => (
            <Tickets handelCard={handelCard} ticket={ticket} key={i}></Tickets>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSec;
