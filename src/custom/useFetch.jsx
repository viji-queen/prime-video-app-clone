import React, { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([]);

console.log(url, 'URL');


  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const errorMessage = response.statusText || `Error: ${response.status}`;
          throw new Error(errorMessage);
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.log(error);
      } 
    };

    fetchData();
  }, [url]);
  console.log(data);

  return (data);
}

export default useFetch