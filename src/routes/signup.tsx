import { ActionFunctionArgs, redirect } from 'react-router-dom'
import { setToken } from '../hooks/LoginHook'

export default async function signupAction({ request }: ActionFunctionArgs) {
  switch (request.method) {
    case 'POST': {
      console.log('## request', request)
      let formData = await request.formData()
      const email = formData.get('email')
      const nickname = formData.get('nickname')
      const password = formData.get('password')
      const body = { email, nickname, password }

      const res = await fetch('/api/signup/verified', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      console.log('## res', res)
      // TODO error modal 생성
      if (!res.ok) return location.reload()
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
