import { useEffect, useState } from 'react'
import { LuSunMedium } from 'react-icons/lu'
import { RiMoonLine } from 'react-icons/ri'

import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  console.log('Header ~ darkMode:', darkMode)
  const darkModeHandle = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    document.body.setAttribute('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.content}>
          <h1>
            <Link to='/'>Where in the world</Link>
          </h1>
          <button onClick={darkModeHandle}>
            {darkMode ? <LuSunMedium /> : <RiMoonLine />}
            Dark mode
          </button>
        </div>
      </div>
    </header>
  )
}
