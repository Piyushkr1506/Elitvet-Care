import React from 'react';
import './DataTable.css'; 

const DataTable = () => {
  const data = [
    {
      id: "RT58",
      Kind: "Dog",
      owner: "Shankar Prasad",
      Email: "Shankar@example.com",
    },
    {
      id: "RT57",
      Kind: "Cat",
      owner: "Basant Patwari",
      Email: "Basant@gmail.com",
    },
    {
      id: "RT56",
      Kind: "Rabbit",
      owner: "Kishore Das",
      Email: "Kishore@yahoo.com",
    },
    {
      id: "RT56",
      Kind: "Rabbit",
      owner: "Kishore Das",
      Email: "Kishore@yahoo.com",
    },
    {
      id: "RT56",
      Kind: "tiger",
      owner: "Kishore Das",
      Email: "Kishore@yahoo.com",
    },
    {
      id: "RT56",
      Kind: "Rabbit",
      owner: "Kishore Das",
      Email: "Kishore@yahoo.com",
    },
    // ... more data rows as needed
  ]
  return (
    <table className="data-table">
      <thead>
        <tr>
          {Object.keys(data[0]).map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
