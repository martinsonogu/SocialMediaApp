import React from 'react';
import "./home.css"
import Topbar from '../../components/Topbar/Topbar';
import  Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";;



const Home = () => {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home;
