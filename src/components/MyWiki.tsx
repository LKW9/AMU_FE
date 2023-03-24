import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'

async function handleEdit(id: string) {
  console.log('$$ edit!')
  // TODO edit
  redirect(`/main/post/${id}`)
}

async function handleDelete(id: string) {
  console.log('$$ delete!!!')
  const body = JSON.stringify({
    '_id': id,
  })

  await fetch('/api/post', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })

  redirect('/main/mywiki')
}

export default function MyWiki({ wiki }: any) {
  const [isDeleted, setIsDeleted] = useState(false)

  return isDeleted ? (
    <></>
  ) : (
    <div className="flex flex-col justify-center px-6 py-8 mx-auto lg:py-0 mb-10">
      <section>
        <div className="flex flex-row">
          <Link to={`/main/${wiki.id}`}>
            <h1 className="text-3xl font-semibold text-gray-800 capitalize">
              {wiki.title}
            </h1>
          </Link>
          <div className="flex items-center justify-center ml-3">
            <Link to={`/main/post/${wiki.id}`}>
              <span
                className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                // onClick={(e) => {
                //   e.preventDefault()
                //   handleEdit(wiki.id)
                // }}
              >
                Edit
              </span>
            </Link>
            <span
              className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
              onClick={(e) => {
                e.preventDefault()
                handleDelete(wiki.id)
                setIsDeleted(true)
              }}
            >
              Delete
            </span>
          </div>
        </div>
        <Link to={`/main/${wiki.id}`}>
          <p>{wiki.text}</p>
        </Link>
      </section>
    </div>
  )
}
