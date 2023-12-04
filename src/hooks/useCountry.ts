import axios from 'axios'
import { create } from 'zustand'

interface CountryInfo {
  borders: string[] | null
  capital: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  flags: {
    alt: string
    png: string
    svg: string
  }
  languages: {
    [key: string]: string
  }
  name: {
    common: string
    nativeName: {
      [key: string]: {
        common: string
        official: string
      }
    }
    official: string
  }
  population: number
  region: string
  subregion: string
  tld: string[]
}

interface CountryState {
  countryInfo: CountryInfo | null
  loading: boolean
  error: null | string
}

interface CountryActions {
  getCountry: (code: string) => void
}

export const useCountry = create<CountryState & CountryActions>((set) => ({
  countryInfo: null,
  loading: false,
  error: null,

  getCountry: async (code) => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      const data = await res.data[0]

      set({ countryInfo: data })
    } catch (error) {
      console.error(error)
    }
  },
}))
