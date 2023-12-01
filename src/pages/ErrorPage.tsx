import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div>
      <p>kakaya to oshibka</p>
      <Link to='/'>return to home page</Link>
    </div>
  )
}
