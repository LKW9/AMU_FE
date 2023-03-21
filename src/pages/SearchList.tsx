import { useActionData, useLoaderData } from 'react-router-dom'
import SearchResult from '../components/SearchResult'

export function SearchList() {
  // TODO type
  const data = useLoaderData() as unknown as any[]
  // const data = [{ title: 'fwe', text: 'fwef' }]
  console.log('## data!', data)
  const list = data ? (
    data.map((d: any) => <SearchResult post={d} key={d.id} />)
  ) : (
    <p>검색 결과 없음</p>
  )
  return <div className="p-16 xl:px-64">{list}</div>
}
