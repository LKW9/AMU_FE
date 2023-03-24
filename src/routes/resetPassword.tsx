import { ActionFunctionArgs, redirect } from 'react-router-dom'

export default async function resetPassrodAction({
  request,
}: ActionFunctionArgs) {
  switch (request.method) {
    case 'PUT': {
      let formData = await request.formData()
      const email = formData.get('email')
      const password = formData.get('password')
      const body = { email, password }

      const res = await fetch('/api/auth/changepassword', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (!res.ok) return location.reload()

      return redirect('/login')
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
