import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CountryDetailsPage } from './pages/CountryDetailsPage'
import { ErrorPage } from './pages/ErrorPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail:country' element={<CountryDetailsPage />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='/error-page' element={<ErrorPage />} />
        <Route path='/*' element={<Navigate to='/404' />} />
      </Route>
    </Routes>
  )
}

export default App
