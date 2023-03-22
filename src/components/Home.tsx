import { Alert } from 'flowbite-react'
import { Form } from 'react-router-dom'
import { getToken } from '../hooks/LoginHook'
import { Cookies, useCookies } from 'react-cookie'
import { getCookie } from '../util/Cookie'

export default function Home() {
  const loginCookie = getCookie()

  // const decodedCookie = decodeURI(
  //   'Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZGtkbGRtbHJtc3BAbmF2ZXIuY29tIn0sImlhdCI6MTY3OTQ5MTUxNCwiZXhwIjoxNjc5NTc3OTE0fQ.V3eueT9z0xwaSJdZFeV1NRtpW2HJmVku39CovziZhEM'
  // )

  // setCookie('cookie', decodedCookie, { path: '/'})

  // const cookieValue = getCookie('cookieName');

  return (
    <div>
      <span>로그인 상태: {loginCookie}</span>
      <section className="bg-white h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 className="text-6xl font-semibold text-center text-gray-800 capitalize mb-10">
            AMU <span className="text-blue-500 ">Wiki</span>
          </h1>
          <Form
            className="flex justify-center w-screen"
            action="/main/search"
            method="get"
          >
            <div className="relative w-[40%]">
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
      </section>
    </div>
  )
}
