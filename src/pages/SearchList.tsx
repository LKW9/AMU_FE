import SearchResult from '../components/SearchResult'

export function SearchList() {
  // const { data } = useLoaderData()
  return (
    <div className="p-16 xl:px-64">
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  )
}
