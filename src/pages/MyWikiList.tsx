import { useLoaderData } from 'react-router-dom'
import MyWiki from '../components/MyWiki'

export default function MyWikiList() {
  const data = useLoaderData() as unknown as any

  const myWikiList = data.map((d: any) => <MyWiki wiki={d} key={d.id} />)

  return <div className="p-16 xl:px-64">{myWikiList}</div>
}
