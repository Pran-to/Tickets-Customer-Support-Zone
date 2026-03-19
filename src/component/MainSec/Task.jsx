const Task = ({ task, allTickets, handelComplete }) => {
  const ne = allTickets.filter((t) => task == t.id);

  return (
    <div className="  rounded-2xl p-4  my-2 shadow-lg ">
      <h1 className="font-semibold mb-2">{ne[0].title}</h1>
      <button
        onClick={() => {
          handelComplete(ne[0].id);
        }}
        className="btn  bg-green-600 text-white w-full "
      >
        Complete
      </button>
    </div>
  );
};

export default Task;
