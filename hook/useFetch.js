import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '0aa2818ac1msh73d7606dda8d4cap13aaa7jsn08da72b24890',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
    }

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(true)
            alert('Error in fetching the jobs, please try after some time')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData()
    }

    return {data, isLoading, error, refetch};
}

export default useFetch