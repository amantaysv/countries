import { Link } from 'react-router-dom'
import { useCountry } from '../../hooks/useCountry'
import s from './CountryDetails.module.scss'

export const CountryDetails = () => {
  const { countryInfo } = useCountry()

  const nativeName = Object.values(countryInfo?.name?.nativeName || {})[0].common
  const currencies = Object.values(countryInfo?.currencies || {})[0]
  const languages = Object.values(countryInfo?.languages || {})
  console.log('CountryDetails ~ nativeName:', nativeName)

  return (
    <div className={s.countryDetails}>
      <div className={s.flag}>
        <img
          src={countryInfo?.flags.svg}
          alt={countryInfo?.flags?.alt || countryInfo?.name.common}
        />
      </div>
      <div className={s.details}>
        <h1>{countryInfo?.name.common}</h1>
        <ul className={s.detailsList}>
          <li>
            Native Name: <span>{nativeName}</span>
          </li>
          <li>
            Population: <span>{countryInfo?.population.toLocaleString()}</span>
          </li>
          <li>
            Region: <span>{countryInfo?.region}</span>
          </li>
          <li>
            Sub Region: <span>{countryInfo?.subregion}</span>
          </li>
          <li>
            Capital: <span>{countryInfo?.capital.join(', ')}</span>
          </li>
          <li>
            Top Level Domain: <span>{countryInfo?.tld.join(', ')}</span>
          </li>
          <li>
            Currencies:{' '}
            <span>
              {currencies.name} - {currencies.symbol}
            </span>
          </li>
          <li>
            Languages: <span>{languages.join(', ')}</span>
          </li>
        </ul>

        {countryInfo?.borders?.length ? (
          <div className={s.borderCountries}>
            <p>Border Countries: </p>
            <div className={s.buttons}>
              {countryInfo?.borders?.map((code) => (
                <Link to={`/country/${code}`} key={code}>
                  {code}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
