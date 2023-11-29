import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
