import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function SearchResult({ post }: any) {
  return (
    <div className="flex flex-col justify-center px-6 py-8 mx-auto lg:py-0 mb-10">
      <Link to={`/main/${post.id}`} className="hover:underline">
        <section>
          <h1 className="my-3 text-3xl font-semibold text-gray-800 capitalize">
            {post.title}
          </h1>
          {/* <p className="truncate">{post.text}</p> */}
        </section>
      </Link>
    </div>
  )
}
