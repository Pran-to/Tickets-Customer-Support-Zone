
import { Suspense } from 'react'
import './App.css'
import Banner from './component/Banner'
import MainSec from './component/MainSec'
import NavBar from './component/NavBar'


const ticketsData = async ()=>{
  const res = await fetch('/Tickets.json')
   return res.json()
}
 const ticketsProp = ticketsData()


function App() {

  return (
    <>
     <NavBar></NavBar>
     <Banner></Banner>
     <Suspense fallback={<div className="flex justify-center items-center ">
  <span className="loading loading-bars loading-xl"></span>
</div>}>
      <MainSec ticketsProp={ticketsProp} ></MainSec>
     </Suspense>
    </>
  )
}

export default App
