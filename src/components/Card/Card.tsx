import { useNavigate } from 'react-router-dom'
import { CountryProps } from '../../interfaces/CountryProps'
import s from './Card.module.scss'

type CardProps = CountryProps

export const Card = (props: CardProps) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/country/${props.cca3}`)
  }
  return (
    <div className={s.card} onClick={onClick}>
      <img src={props.flags.svg} alt='' />
      <div className={s.content}>
        <h2>{props.name.common}</h2>
        <ul>
          <li>
            <strong>Population: </strong>
            {props.population}
          </li>
          <li>
            <strong>Region: </strong>
            {props.region}
          </li>
          <li>
            <strong>Capital: </strong>
            {props.capital}
          </li>
        </ul>
      </div>
    </div>
  )
}
