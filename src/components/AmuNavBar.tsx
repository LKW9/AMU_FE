import { Form, Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import UserMenu from './UserMenu'

export default function AmuNavBar() {
  return (
    <div className="sticky top-0">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div>
            <Link to="/" className="flex items-center">
              <span className="self-center text-3xl font-semibold whitespace-nowrap">
                AMU <span className="text-blue-500 ">Wiki</span>
              </span>
            </Link>
          </div>
          <div className="relative mt-4 md:mt-0">
            <Form method="get" action="/main/search">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                name="q"
                className="min-w-full lg:w-96 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />
              <Button type="submit" className="hidden" />
            </Form>
          </div>
          <UserMenu />
        </div>
      </nav>
    </div>
  )
}
