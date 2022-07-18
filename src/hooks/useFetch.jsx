import { useState, useEffect } from "react"
import { useLocation  } from 'react-router-dom'

export const useFetch = (url, params) => {
    const { pathname } = useLocation()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${url}${pathname}${params || ""}`)
            .then(res => res.json())
            .then(info => {
                setData(info)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    }, [])

    return {data, isLoading, error}
}