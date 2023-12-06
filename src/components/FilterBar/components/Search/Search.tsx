import cn from 'clsx'
import { ChangeEvent, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useCountries } from '../../../../hooks/useCountries'
import s from './Search.module.scss'

export const Search = () => {
  const { search, setSearch } = useCountries()
  const [error, setError] = useState(false)

  const regex = /[\u0400-\u04FF]/g

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false)
    const matches = e.target.value.match(regex)
    console.log('handleChange ~ matches:', matches)
    // if (matches) return setError(true)

    setSearch(e.currentTarget.value)
  }
  return (
    <label className={cn(s.search, { [s.error]: error })}>
      <input
        placeholder='Search for a country...'
        type='text'
        onChange={handleChange}
        value={search}
      />
      <IoIosSearch />
      {error && <p>unsupported language</p>}
    </label>
  )
}
