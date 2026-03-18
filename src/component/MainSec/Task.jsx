const Task = ({ task, allTickets }) => {
  const ne = allTickets.filter((t) => task == t.id);

  return (
    <div className="  rounded-2xl p-4  my-2 shadow-lg ">
      <h1 className="font-semibold mb-2">{ne[0].title}</h1>
      <button className="btn  bg-green-600 text-white w-full ">Complete</button>
    </div>
  );
};

export default Task;
