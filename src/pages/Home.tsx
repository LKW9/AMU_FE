import { Form, Link } from 'react-router-dom'
import UserMenu from '../components/UserMenu'

export default function Home() {
  const nickname = sessionStorage.getItem('nickname')

  return (
    <div className="h-screen">
      <div className="container flex flex-wrap flex-row-reverse items-center justify-between mx-auto mr-3.5">
        {nickname ? (
          <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
            <UserMenu />
          </nav>
        ) : (
          <Link to="/login" className="px-2 sm:px-4 py-2.5">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Log in
            </button>
          </Link>
        )}
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 my-10 mt-16">
        <Link to="/">
          <h1 className="text-6xl font-semibold text-center text-gray-800 capitalize mb-10">
            AMU <span className="text-blue-500 ">Wiki</span>
          </h1>
        </Link>
        <Form
          className="flex justify-center w-screen"
          action="/main/search"
          method="get"
        >
          <div className="relative w-[40%]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="text"
              id="simple-search"
              name="q"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </Form>
      </div>
    </div>
  )
}
