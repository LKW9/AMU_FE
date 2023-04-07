import { Button } from 'flowbite-react'
import { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import Timer from '../components/Timer'

export default function SignUp() {
  const [isVerified, setIsVerified] = useState(false)
  const [isSended, setIsSended] = useState(false)

  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const passwordRegex =
    /^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]\\\'\"`~])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/

  async function handleSendEmail(e: any) {
    e.preventDefault()

    const res = await fetch('/api/signup/email', {
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

    const res = await fetch('/api/signup/verifying', {
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
              Create and account
            </h1>
            <Form
              className="space-y-4 md:space-y-6"
              action="/signup"
              method="post"
            >
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 peer"
                    placeholder="name@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    onClick={handleSendEmail}
                    className="ml-2 peer-invalid:hidden"
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 peer/code"
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      onClick={handleVerifyEmail}
                      className="ml-2 peer-invalid/code:hidden"
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
                      htmlFor="nickname"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your nickname
                    </label>
                    <input
                      type="text"
                      name="nickname"
                      id="nickname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
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
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {!passwordRegex.test(password) && password.length > 0 ? (
                      <p
                        id="standard_error_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        Passwords must be at least 8 characters long, contain
                        special characters, numbers, and English.
                      </p>
                    ) : (
                      <></>
                    )}
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
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        I accept the{' '}
                        <a
                          className="font-medium text-primary-600 hover:underline"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center {0 === 1 ? text-red}"
                    disabled={
                      password.length < 8 || password !== confirmPassword
                    }
                  >
                    Create an account
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
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
