import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import './index.css'
import { ErrorBoundary } from './pages/ErrorBoundary'
import Login from './pages/Login'
import MyWikiList from './pages/MyWikiList'
import Profile from './pages/Profile'
import { SearchList } from './pages/SearchList'
import SignUp from './pages/SignUp'
import Wiki from './pages/Wiki'
import WikiDetail from './pages/WikiDetail'
import loginAction from './routes/login'
import Root from './routes/Root'
import wikiAction from './routes/wiki'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      // loader: async ({ req, res }) => {
      //   // TODO data before rendering (회원가입 정보 수정시 미리 회원 정보 불러오기 등)
      //   return
      // },
      action: async ({ request }) => {
        // TODO mutation data (form 데이터 전송 뒤 등)
        fetch('/api/google')
        return
      },
      errorElement: <ErrorBoundary />,
    },
    {
      path: '/main',
      element: <Root />,
      children: [
        {
          path: 'search',
          element: <SearchList />,
          loader: async ({ request }) => {
            const res = await fetch(`/api/amuwiki/search/google`, {
              method: 'get',
            })
            if (!res.ok) throw res
            const data = await res.json()
            return { data }
          },
          action: async ({ request }) => {
            const res = await fetch(`/api/amuwiki/search/google`, {
              method: 'get',
              body: await request.formData(),
            })
            if (!res.ok) throw res
            return { ok: true }
          },
        },
        { path: ':wikiId', element: <WikiDetail /> },
        {
          path: 'post',
          element: <Wiki />,
          action: wikiAction,
        },
        { path: 'mywiki', element: <MyWikiList /> },
      ],
    },
    { path: '/login', element: <Login />, action: loginAction },
    { path: '/signup', element: <SignUp /> },
    { path: '/profile', element: <Profile /> },
  ],
  { basename: '/' }
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
