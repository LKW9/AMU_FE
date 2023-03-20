import { useLoaderData } from 'react-router-dom'
import SearchResult from '../components/SearchResult'

export function SearchList() {
  const { data } = useLoaderData()
  console.log('## data!', data)
  const list = data.map((d) => <SearchResult post={d} />)
  return <div className="p-16 xl:px-64">{list}</div>
}
