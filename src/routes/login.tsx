import { Cookies } from 'react-cookie'
import { ActionFunctionArgs, redirect } from 'react-router-dom'

export default async function loginAction({ request }: ActionFunctionArgs) {
  const cookie = new Cookies()
  switch (request.method) {
    case 'POST': {
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

      const encodedCookie = await res.text()
      const decodedCookie = decodeURI(encodedCookie)

      cookie.set('cookie', decodedCookie, { path: '/' })

      const userProfile = await fetch('/api/profile/detail')
      const data = await userProfile.json()
      console.log('$$$ 로그인 후 프로필', data)
      

      sessionStorage.setItem('nickname', data.nickname)

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
