import { ActionFunctionArgs, redirect } from 'react-router-dom'

export default async function wikiAction({ request }: ActionFunctionArgs) {
  let formData = await request.formData()
  switch (request.method) {
    case 'POST': {
      const title = formData.get('title')
      const text = formData.get('description')
      const body = { title, text }

      const res = await fetch('/api/post', {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        credentials: 'include',
        body: JSON.stringify(body),
      })

      console.log('$res', res)

      return redirect('/')
    }
    case 'PUT': {
      const title = formData.get('title')
      const text = formData.get('description')
      const body = { title, text }

      const res = await fetch('/api/post', {
        method: 'put',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        credentials: 'include',
        body: JSON.stringify(body),
      })

      console.log('$res', res)

      return redirect('/')
    }
    default:
      return redirect('/')
  }
}
