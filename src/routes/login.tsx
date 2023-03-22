import { Cookies } from 'react-cookie'
import { ActionFunctionArgs, redirect } from 'react-router-dom'

export default async function loginAction({ request }: ActionFunctionArgs) {
  const cookie = new Cookies()
  switch (request.method) {
    case 'POST': {
      console.log('## request', request)
      let formData = await request.formData()
      const email = formData.get('email')
      const password = formData.get('password')
      const body = { email, password }

      const res = await fetch('/api/auth/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      console.log('## res', res)
      const encodedCookie = await res.text()

      // console.log('rrr', encodedCookie)
      const decodedCookie = decodeURI(encodedCookie)

      cookie.set('cookie', decodedCookie, { path: '/' })

      // localStorage.setItem(
      //   'cookie',
      //   'Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiY2FsbWVyYW1pZ291QGdtYWlsLmNvbSJ9LCJpYXQiOjE2Nzk0OTE2MjQsImV4cCI6MTY3OTU3ODAyNH0.McvjzokGymdffzY7dQnqRzKm11qSHC3fFcF75vRqDHM'
      // )
      // console.log('* header', res.headers.get('cookie'))

      // setToken('tokendkffjflwkefjwe')

      return redirect('/')
    }
    case 'DELETE': {
      return redirect('/')
    }
    case 'GET': {
      return redirect('/')
    }
    default: {
      throw new Response('', { status: 405 })
    }
  }
}
