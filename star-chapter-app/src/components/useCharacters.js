import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCharacters = (page, search, speciesFilter) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(1)
  const [homeworlds, setHomeworlds] = useState({})
  const [speciesMap, setSpeciesMap] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        let url = `https://swapi.dev/api/people/?page=${page}`
        const params = new URLSearchParams()
        if (search) params.append('search', search)
        url += `&${params.toString()}`

        const { data } = await axios.get(url)
        let filtered = data.results

        // Client-side species filter
        if (speciesFilter && !search) {
          filtered = await Promise.all(
            data.results.map(async (char) => {
              if (char.species.length > 0) {
                const speciesRes = await axios.get(char.species[0])
                if (speciesRes.data.name.toLowerCase() === speciesFilter.toLowerCase()) return char
              }
              return null
            })
          ).then(results => results.filter(Boolean))
        }

        setCharacters(filtered)
        setTotalPages(Math.ceil(data.count / 10))
      } catch (err) {
        setError('Failed to fetch characters')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page, search, speciesFilter])

  const fetchHomeworld = async (url) => {
    if (homeworlds[url]) return homeworlds[url]
    const { data } = await axios.get(url)
    const planet = data
    setHomeworlds(prev => ({ ...prev, [url]: planet }))
    return planet
  }

  const getSpecies = async (url) => {
    if (!url) return { name: 'Unknown' }
    if (speciesMap[url]) return speciesMap[url]
    const { data } = await axios.get(url)
    setSpeciesMap(prev => ({ ...prev, [url]: data }))
    return data
  }

  return { characters, loading, error, totalPages, fetchHomeworld, getSpecies }
}