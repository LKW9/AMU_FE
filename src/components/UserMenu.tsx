import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link, redirect } from 'react-router-dom'
import { getCookie, removeCookie } from '../util/Cookie'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function handleLogout() {
  removeCookie()
  sessionStorage.clear()
  location.reload()
}

export default function UserMenu() {
  const isLoginUser = getCookie()
  const nickname = sessionStorage.getItem('nickname')

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 hover:bg-gray-50">
          {isLoginUser ? (
            <span>Hello, {nickname}!</span>
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
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 divide-y">
            {isLoginUser ? (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/main/post"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      New Wiki
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/main/mywiki"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      My Wiki
                    </a>
                  )}
                </Menu.Item>{' '}
              </>
            ) : (
              <></>
            )}
            <Menu.Item>
              {({ active }) =>
                isLoginUser ? (
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Log in
                  </Link>
                )
              }
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
