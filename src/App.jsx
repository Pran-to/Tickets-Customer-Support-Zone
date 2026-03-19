import { Suspense, use, useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import MainSec from "./component/MainSec";
import NavBar from "./component/NavBar";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./component/Footer";

const ticketsData = async () => {
  const res = await fetch("/Tickets.json");
  return res.json();
};
const ticketsProp = ticketsData();

function App() {
  const [ticketsP, setTicketsP] = useState(use(ticketsProp));
  const [progress, setProgress] = useState(0);
  const [resolve, setResolve] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolveStatus, setResolveStatus] = useState([]);
  const handelCard = (id) => {
    if (taskStatus.includes(id)) {
      toast.warn("Already Added in Task list");
      return;
    }
    setTaskStatus([...taskStatus, id]);
    setProgress(progress + 1);
    toast.success('Success added in Task List')
  };
  const handelComplete = (id) => {
    toast.success(' Complete Task')
    setResolveStatus([...resolveStatus, id]);
    setProgress(progress - 1);
    setResolve(resolve + 1);
    const ne = taskStatus.filter((n) => id != n);
    setTaskStatus(ne);
    const ti = ticketsP.filter((n) => id != n.id);
    setTicketsP(ti);
  };
  return (
    <>
    <ToastContainer></ToastContainer>
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
          ticketsP={ticketsP}
        ></MainSec>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
