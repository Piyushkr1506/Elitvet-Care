import React from "react";
import "./ServiceTable.css";
import Navbar from "./Navbar";

const ServiceTable = () => {
  const servicesData = [
    { name: "Basic Cleaning", price: 250.0 },
    { name: "Deep Cleaning", price: 400.0 },
    { name: "Pet Care", price: 500.0 },
    { name: "Routine wellness checks", price: 300.0 },
    { name: "Emergency responses", price: 550.0 },
    { name: "Advanced surgical procedures", price: 800.0 },
    { name: "Comprehensive vaccinations", price: 300.0 },
    { name: "Dietary guidance", price: 799.0 },
    { name: "Professional grooming", price: 999.0 },
    // ... more services as needed
  ];

  const handleBookedServices = () => {
    alert("contact us : +91 1234567890");
  };

  return (
    <>
      <Navbar />
      <div className="dash_board_css">
        <h2>Services</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>${service.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="book-services">
          <button className="logout-button" onClick={handleBookedServices}>
            Book your services
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceTable;
