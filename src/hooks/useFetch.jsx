import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw error('Could not fetch the data for that resources')
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setIsPending(false)
            setError(err.message)
        })
    }, [url])

    return { data, setData, isPending, setIsPending, error }
}

export default useFetch