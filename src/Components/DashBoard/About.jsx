import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

export const About = () => {
  
  return (
    <>
      <Navbar />
      <div className="dash_board_css">
        <div className="my-card">
          <div className="card" style={{ width: "100%" }}>
            <h2
              className="card-title"
              style={{
                color: "grey",
                fontSize: "20px",
                borderBottom: "1px solid",
                paddingBottom: "10px",
              }}
            >
              {"About"}
            </h2>
            <div style={{ display: "flex" }}>
              <p className="card-title" style={{ fontWeight: "500", fontSize: "16px"}}>
              <h2>About Elitvet Care</h2>
            
            <p>
                <strong>Elitvet Care</strong> is more than just a clinic; we're a team of passionate animal enthusiasts dedicated to your pet's well-being. Founded in 2023 by Dr. Piyush Kumar, we've consistently aimed to offer unparalleled veterinary services with a heart.
            </p>
            
            <p>
                From our humble beginnings, Dr. Piyush's vision was clear: create a place where pets receive top-tier, compassionate care. Over the years, while our family has grown, our core values remain steadfast.
            </p>

            <h3>Our Services:</h3>
            <ul>
                <li>Routine wellness checks</li>
                <li>Emergency responses</li>
                <li>Advanced surgical procedures</li>
                <li>Comprehensive vaccinations</li>
                <li>Dietary guidance</li>
                <li>Professional grooming</li>
            </ul>

            <p>
                Our devoted team, led by experienced veterinarians and supported by skilled technicians, treats every pet as their own. We pride ourselves on keeping abreast of the latest in veterinary science, ensuring your pet benefits from contemporary treatments.
            </p>
            
            <p>
                Community involvement is our hallmark. Beyond our clinic's walls, we engage in community events, organize educational sessions, and collaborate with local shelters, aiding animals in need.
            </p>

            <p>
                Your pet's health is our mission. Experience our commitment firsthand; schedule a visit or drop by our shop today.
            </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
