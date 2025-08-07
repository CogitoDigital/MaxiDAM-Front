import { useNavigate } from 'react-router-dom'

export function AuthPage() {
  const navigate = useNavigate()

  const handleLogin = () => {
    try {
      localStorage.setItem('user', JSON.stringify({ email: 'demo@maxidam.com' }))
      navigate('/')
    } catch {
      alert("Erreur : stockage local non disponible.")
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Authentification</h2>
      <button onClick={handleLogin}>Se connecter (démo)</button>
    </div>
  )
}
