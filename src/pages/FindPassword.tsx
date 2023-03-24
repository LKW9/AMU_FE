import { Button } from 'flowbite-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Timer from '../components/Timer'

export default function FindPassword() {
  const [isVerified, setIsVerified] = useState(false)
  const [isSended, setIsSended] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSendEmail(e: any) {
    e.preventDefault()

    const res = await fetch('/api/auth/email', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) throw res

    setIsSended(true)
    setIsVerified(false)
  }

  async function handleVerifyEmail(e: any) {
    e.preventDefault()

    const body = { email, code }

    const res = await fetch('/api/auth/verifying', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) throw res

    setIsVerified(true)
    setIsSended(false)
  }

  async function handleResetPassword(e: any) {
    e.preventDefault()

    const body = { email, password }

    const res = await fetch('/api/auth/changepassword', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) throw res

    navigate('/login')
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            AMU <span className="text-blue-500 ">Wiki</span>
          </h1>
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Find my password
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <div className="flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    onClick={handleSendEmail}
                    className="ml-2"
                  >
                    Send
                  </Button>
                </div>
              </div>
              {isSended ? (
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Verification code{' '}
                    {isVerified ? <></> : <Timer delayResend="180" />}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="code"
                      id="code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      onClick={handleVerifyEmail}
                      className="ml-2"
                    >
                      Verify
                    </Button>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {isVerified ? (
                <>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                  <Button
                    type="button"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={handleResetPassword}
                  >
                    Update password
                  </Button>
                </>
              ) : (
                <></>
              )}

              <p className="text-sm font-light text-gray-500">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
