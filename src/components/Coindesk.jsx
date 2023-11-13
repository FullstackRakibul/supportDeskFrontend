import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Coindesk = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
    //   const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      const response = await axios.get('https://www.boredapi.com/api/activity');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Data from API</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Coindesk;
