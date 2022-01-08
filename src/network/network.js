import { useState, useEffect } from 'react';
import Axios from 'axios';

const UseGetNews = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await Axios.get('https://valorant-api.com/v1/' + url);
      //console.log(data.data);
      setData(data.data['data']);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { error, loading, data };
};

export default UseGetNews;
