import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

export const useFetch = (params = {}) => {
    const { pathname } = useLocation()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const URL = !Object.keys(params).length ? `https://rickandmortyapi.com/api${pathname}?page=${page}` : `https://rickandmortyapi.com/api${pathname}?page=${page}&name=${params.name || ""}&status=${params.status || ""}&gender=${params.gender || ""}`
        fetch(URL)
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