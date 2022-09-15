import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

export const useFetch = (params) => {
    const { pathname } = useLocation()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://rickandmortyapi.com/api${pathname}?page=${page}${params || ""}`)
            .then(res => res.json())
            .then(info => {
                setData(info)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    }, [params, page])

    return { data, isLoading, error, page, setPage }
}