import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /videos, /images
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6edf88cceemsh2f04e2baf78a30cp108cd3jsnddc9e089c9e6',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        })

        // search data
        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = () => useContext(ResultContext)
