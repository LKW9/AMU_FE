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
          loader: async () => {
            return {
              data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec velit mollis, sollicitudin dui nec, efficitur sapien. Mauris porta aliquam odio, sit amet viverra ligula blandit sed. Quisque cursus pulvinar urna, eu malesuada est dictum sed. Vestibulum ultrices efficitur quam. Nam ut volutpat justo. Quisque dolor est, volutpat eget odio id, rutrum varius orci. Maecenas euismod vestibulum velit a condimentum. Aliquam bibendum commodo enim at tristique. Etiam rutrum dapibus tristique. Nulla semper placerat lacinia.',
            }
          },
          action: async ({ request }) => {
            console.log('##', request)
            return '검색결과'
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
    { path: '/login', element: <Login /> },
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
