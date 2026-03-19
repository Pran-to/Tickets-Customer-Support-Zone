import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import MainSec from "./component/MainSec";
import NavBar from "./component/NavBar";

const ticketsData = async () => {
  const res = await fetch("/Tickets.json");
  return res.json();
};
const ticketsProp = ticketsData();

function App() {
  const [progress, setProgress] = useState(0);
  const [resolve, setResolve] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolveStatus, setResolveStatus] = useState([]);
  const handelCard = (id) => {
    setTaskStatus([...taskStatus, id]);
    setProgress(progress + 1);
  };
  const handelComplete =(id)=>{
    setResolveStatus([...resolveStatus,id])
    setProgress(progress - 1);
    setResolve(resolve+1)
    const ne = taskStatus.filter(n => id != n)
    setTaskStatus(ne)

  }
  return (
    <>
      <NavBar></NavBar>
      <Banner progress={progress} resolve={resolve}></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center ">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <MainSec
          taskStatus={taskStatus}
          resolveStatus={resolveStatus}
          handelCard={handelCard}
          handelComplete={handelComplete}
          ticketsProp={ticketsProp}
        ></MainSec>
      </Suspense>
    </>
  );
}

export default App;
