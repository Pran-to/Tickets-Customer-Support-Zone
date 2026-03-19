import React, { use } from "react";

const Resolved = ({ ticketsProp, re }) => {
  const ne = use(ticketsProp).filter((r) => re == r.id);
  return (
    <div>
      <div className="  rounded-2xl p-4  my-2 shadow-lg ">
        <h1 className="font-semibold mb-2">{ne[0].title}</h1>
      </div>
    </div>
  );
};

export default Resolved;
