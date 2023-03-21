import Home from './components/Home'
import { getToken } from './hooks/LoginHook'

function App() {
  const token = getToken()
  return (
    <div className="h-screen max-w-screen">
      <Home token={token} />
    </div>
  )
}

export default App
