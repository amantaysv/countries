import { ChangeEvent } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useCountries } from '../../../../hooks/useCountries'
import s from './Search.module.scss'

export const Search = () => {
  const { search, setSearch } = useCountries()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  return (
    <label className={s.search}>
      <input
        placeholder='Search for a country...'
        type='text'
        onChange={handleChange}
        value={search}
      />
      <IoIosSearch />
    </label>
  )
}
