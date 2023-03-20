import { ActionFunctionArgs, redirect } from 'react-router-dom'

export default async function loginAction({ request }: ActionFunctionArgs) {
  switch (request.method) {
    case 'POST': {
      console.log('## request', request)
      let formData = await request.formData()
      console.log('넘어간 데이터', formData)
      let name = formData.get('email')
      return redirect('/')
    }
    case 'DELETE': {
      return redirect('/')
    }
    default: {
      throw new Response('', { status: 405 })
    }
  }
  const res = await fetch('/api/login', {
    method: 'post',
    body: await request.formData(),
  })

  if (!res.ok) throw res

  return redirect('/')
}
