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
          {/* <p className="lead">
            Flowbite is an open-source library of UI components built with the
            utility-first classes from Tailwind CSS. It also includes
            interactive elements such as dropdowns, modals, datepickers.
          </p> */}
          <p>{data.text}</p>
          {/* <p>
            But then I found a{' '}
            <a href="https://flowbite.com">
              component library based on Tailwind CSS called Flowbite
            </a>
            . It comes with the most commonly used UI components, such as
            buttons, navigation bars, cards, form elements, and more which are
            conveniently built with the utility classes from Tailwind CSS.
          </p> */}
        </article>
      </div>
    </main>
  )
}
