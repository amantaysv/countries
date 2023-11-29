import axios from 'axios'
import { useEffect, useState } from 'react'
import { CountryProps } from '../interfaces/CountryProps'

const url = 'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region'

interface CountriesProps {
  countries: CountryProps[]
  loading: boolean
  error: null | string
}

export const useCountries = () => {
  const [countries, setCountries] = useState<CountriesProps>({
    countries: [],
    loading: false,
    error: null,
  })

  const getCountries = () => {
    setCountries({ ...countries, loading: true, error: null })

    axios(url)
      .then(({ data }) => setCountries({ ...countries, countries: data, loading: false }))
      .catch((error) => setCountries({ ...countries, error, loading: false }))
  }

  useEffect(() => {
    getCountries()
  }, [])

  return countries
}
