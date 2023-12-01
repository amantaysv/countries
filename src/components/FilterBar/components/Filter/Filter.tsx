import cn from 'clsx'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoChevronDownOutline } from 'react-icons/io5'
import { useCountries } from '../../../../hooks/useCountries'
import s from './Filter.module.scss'

const regions = [
  {
    label: 'Oceania',
    value: 'Oceania',
  },

  {
    label: 'Africa',
    value: 'Africa',
  },

  {
    label: 'Europe',
    value: 'Europe',
  },

  {
    label: 'Asia',
    value: 'Asia',
  },

  {
    label: 'Americas',
    value: 'Americas',
  },

  {
    label: 'Antarctic',
    value: 'Antarctic',
  },
]

const defaultFilterState = 'Filter by Region'

export const Filter = () => {
  const { region, setRegion } = useCountries()

  const [isOpen, setIsOpen] = useState(false)

  const handleSelectRegion = (value: string) => {
    setRegion(value)
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const resetFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    setRegion(defaultFilterState)
  }

  return (
    <div className={s.filter}>
      <button className={s.filterButton} onClick={handleOpen}>
        {region}
        {region !== defaultFilterState && (
          <span onClick={resetFilter}>
            <IoMdClose />
          </span>
        )}
        <IoChevronDownOutline />
      </button>
      <div
        className={cn(s.filterOptions, {
          [s.active]: isOpen,
        })}
      >
        {regions
          .sort((a, b) => {
            if (a.value > b.value) return 1
            if (a.value < b.value) return -1
            return 0
          })
          .map(({ label, value }) => (
            <button key={value} onClick={() => handleSelectRegion(value)} value={value}>
              {label}
            </button>
          ))}
      </div>
    </div>
  )
}
