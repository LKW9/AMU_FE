import { useLoaderData } from 'react-router-dom'

export default function WikiDetail() {
  const data = useLoaderData() as unknown as any

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              {data.title}
            </h1>
          </header>
          <p>{data.text}</p>
        </article>
      </div>
    </main>
  )
}
