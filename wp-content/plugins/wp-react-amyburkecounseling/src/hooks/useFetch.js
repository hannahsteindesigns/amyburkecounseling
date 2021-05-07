import { useEffect, useState } from 'react';
import axios from 'axios';


//const urlPrefix = (process.env.NODE_ENV === 'development') ? 'http://localhost:8888/' : 'https://amyburkecounseling.com/';
    
export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        
        async function getPageData() {
          try {
            const response = await axios.get('http://localhost:8888/' + url);
            setData(response);
          } catch (error) {
            console.log(error);
          }
        }

        getPageData();
    }, [url]);

    return data;
}