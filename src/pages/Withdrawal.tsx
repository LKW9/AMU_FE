import { useState } from 'react'
import { Form, Link, redirect } from 'react-router-dom'

export default function Withdrawal() {
  const [password, setPassword] = useState('')
  async function handleWithdrawl(e: any) {
    const body = JSON.stringify({ password })

    await fetch('/api/auth/withdrawal', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

    return redirect('/')
  }
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Are you sure you want to leave?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Deleting your account will permanently remove all associated data
            and information, so please contact our support team if you have any
            issues before proceeding.
          </p>

          <Form className="flex flex-col my-4 lg:mt-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24"
                  stroke-width="1"
                  stroke="gray"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your password"
                onChange={(e) => {
                  e.preventDefault()
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div>
              <a
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleWithdrawl(e)
                }}
                className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
              >
                Leave now
              </a>
            </div>
          </Form>
          <Link
            to="/"
            className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center bg-blue-700 text-white rounded-lg border hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  )
}
