import { useCountries } from '../../hooks/useCountries'

import { Card } from '../Card/Card'
import s from './List.module.scss'

export const List = () => {
  const { countries, error, loading } = useCountries()
  console.log('List ~ countries:', countries)

  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className={s.list}>
      {countries.map((country) => (
        <Card {...country} key={country.name.common} />
      ))}
    </div>
  )
}
