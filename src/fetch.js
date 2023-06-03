//custom hook
import {useState, useEffect} from 'react'

const UseFetch = (initialUrl) => {

    const[data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [url, setUrl] = useState(initialUrl); //whenever user searches for a city, url will change, to keep track of it, this state exists. 

    useEffect(() => 
    {
        if(!url) return;
        setIsLoading(true);

        //clear old search
        setData(null);
        setError(null);

        fetch(url)
        .then((response) => response.json())
        .then((data) => {

            setIsLoading(false);
            if(data.cod >= 400){
                setError(data.message);
                return;
            } //return error message if server error
            
            setData(data);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error);
        });
    }, [url]) //url in dependency array so app is updated whenever the URL changes

    return {data, error, isLoading, setUrl}; //This is whatever I want another component to have access to
};

export default UseFetch;