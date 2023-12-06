import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BackButton } from '../components/BackButton.tsx/BackButton'
import { CountryDetails } from '../components/CountryDetails/CountryDetails'
import { CountryDetailsSkeleton } from '../components/CountryDetails/CountryDetailsSkeleton'
import { useCountry } from '../hooks/useCountry'

export const CountryDetailsPage = () => {
  const { countryName } = useParams()
  console.log('CountryDetailsPage ~ countryName:', countryName)

  const { countryInfo, getCountry, loading } = useCountry()
  console.log('CountryDetailsPage ~ countryInfo:', countryInfo)

  useEffect(() => {
    getCountry(countryName)
  }, [countryName])

  if (!countryInfo) return <>empty</>
  return (
    <>
      <BackButton />
      {!loading ? <CountryDetailsSkeleton /> : <CountryDetails />}
    </>
  )
}
