import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUser } from './auth'
import { AuthPage } from './AuthPage.tsx'
import { ExplorerPage } from './ExplorerPage'
import { Layout } from './Layout'

export default function App() {
  const [user, setUser] = useState(() => getUser())

  useEffect(() => {
    const newUser = getUser()
    setUser(newUser)
  }, [])

  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<AuthPage onLogin={() => setUser(getUser())} />} />
      </Routes>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ExplorerPage />} />
        <Route path="/login" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}
