import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import AmuFooter from '../components/AmuFooter'
import AmuNavBar from '../components/AmuNavBar'
import SearchResult from '../components/SearchResult'

export function SearchList() {
  const { data } = useLoaderData()
  return (
    <div className="w-screen h-screen">
      <AmuNavBar />
      <div className="p-16 xl:px-64">
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
      <AmuFooter />
    </div>
  )
}
