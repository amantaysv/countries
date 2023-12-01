import { Filter } from './components/Filter/Filter'
import { Search } from './components/Search/Search'
import s from './FilterBar.module.scss'

export const FilterBar = () => {
  return (
    <div className={s.filterBar}>
      <Search />
      <Filter />
    </div>
  )
}
