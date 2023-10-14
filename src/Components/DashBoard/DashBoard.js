import { useState } from "react";
import React from "react";
import Card from "./Card";
import DataTable from "./DataTable";
import dogIcon from "../../Images/dogPic.png";
import staffIcon from "../../Images/staff.png";
import doghouse from "../../Images/doghouse.png"
import Navbar from "./Navbar";
const Dashboard = () => {
  
  return (
    <>
    <Navbar />
   
    <div className="dash_board_css">
      <div className="my-card">
        <Card title={"Total clients"} content={"8000+"} imgSrc={dogIcon} />
        <Card title={"Total Staffs"} content={"350"} imgSrc={staffIcon} />
        <Card title={"Total Rooms"} content={"150"} imgSrc={doghouse} />
      </div>
      <div className="content">
        <h2>Latest Customer</h2>
        <DataTable  />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
