import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import s from './BackButton.module.scss'
export const BackButton = () => {
  const navigation = useNavigate()
  const onBackHandle = () => {
    navigation(-1)
  }
  return (
    <button onClick={onBackHandle} className={s.backButton}>
      <IoArrowBackOutline /> Back
    </button>
  )
}
