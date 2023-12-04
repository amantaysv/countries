import axios from 'axios'
import { create } from 'zustand'
import { CountryProps } from '../interfaces/CountryProps'

const url = 'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca3'

interface CountriesState {
  countries: CountryProps[]
  search: string
  region: string
  loading: boolean
  error: null | string
}

interface CountriesActions {
  getCountries: () => void
  setSearch: (payload: string) => void
  setRegion: (payload: string) => void
}

export const useCountries = create<CountriesState & CountriesActions>((set) => ({
  countries: [],
  search: '',
  region: '',
  loading: false,
  error: null,

  setSearch: (payload) => set({ search: payload }),
  setRegion: (payload) => set({ region: payload }),

  getCountries: async () => {
    set({ loading: true })

    try {
      const res = await axios(url)
      const data = await res.data
      set({ countries: data, loading: false })
    } catch (error: any) {
      set({ error: error?.message, loading: false })
    }
  },
}))

// () => {
//   const [countries, setCountries] = useState<CountriesProps>({
//     countries: [],
//     loading: false,
//     error: null,
//   })

//   const getCountries = () => {
//     setCountries({ ...countries, loading: true, error: null })

//
//   }

//   useEffect(() => {
//     getCountries()
//   }, [])

//   return countries
// }
