import { useEffect } from 'react'
import { useCountries } from '../../hooks/useCountries'

import { Navigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { CardSkeleton } from '../Card/CardSkeleton'
import s from './List.module.scss'

export const List = () => {
  const { countries, error, loading, getCountries, region, search } = useCountries()

  useEffect(() => {
    getCountries()
  }, [])

  if (loading)
    return (
      <div className={s.list}>
        {new Array(12).fill(null).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    )
  if (error) return <Navigate to='/error-page' />

  return (
    <div className={s.list}>
      {countries
        .filter((country) => country.name.common.toLowerCase().includes(search.toLocaleLowerCase()))
        .filter((country) => country.region.includes(region))
        .map((country) => (
          <Card {...country} key={country.name.common} />
        ))}
    </div>
  )
}
