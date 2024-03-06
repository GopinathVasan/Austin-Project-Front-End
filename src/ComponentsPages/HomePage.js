import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios library
import './HomePage.css';

const Homepages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8000/api/nmdc');
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Austin</h2>
      <p>
        NMDC is engaged in exploration and production of Iron Ore along with Diamond, production and sale of Sponge Iron and generation and sale of Wind Power.(Source : 2 2003 Annual Report)
      </p>
      <h3>KEY POINTS</h3>
      <p>
        A Navratna company [¹] National Mineral Development Corporation
      </p>
      <table>
        <thead>
          <tr>
            <th>screeneril HOME</th>
            <th>NMDC Chart Analysis Peers Quarters</th>
            <th>NMDC Ltd</th>
            <th>nmdc.co.in</th>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <th>{item.marketCap}</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Homepages;
