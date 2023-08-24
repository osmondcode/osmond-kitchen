import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header";
import Home from './components/home';
import AOS from "aos";
import 'aos/dist/aos.css'
import About from './components/about';
import Gallery from './components/gallery';
import Review from './components/review';
import Team from './components/team';
import Order from './components/order';
import Footer from './components/footer';
import Btt from './components/BTT';
import SideBar from "./components/sideBar";

function App() {
  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])

  const [sideBar, setSideBar] = useState(false)

  const sidebarHandle = () => {
    setSideBar(!sideBar)
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-items-start bg-[#dedede]">
        <Header sidebarHandle={sidebarHandle}/>
        {sideBar && <SideBar sidebarHandle={sidebarHandle}/>}
        <Btt/>
        <Home/>
        <About/>
        <Gallery/>
        <Review/>
        <Team/>
        <Order/>
        <Footer/>
    </div>
  );
}

export default App;
