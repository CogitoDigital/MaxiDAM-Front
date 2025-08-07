import { useNavigate } from 'react-router-dom'

export function AuthPage({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ email: 'demo@maxidam.com' }))
    onLogin()
    navigate('/')
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h2 className="text-xl mb-4">Authentification</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Connexion
      </button>
    </div>
  )
}
