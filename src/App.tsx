import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from './auth'
import { AuthPage } from './AuthPage'
import { ExplorerPage } from './ExplorerPage'
import { AssetDetailPage } from './AssetDetailPage'
import { Layout } from './Layout'

export default function App() {
  const user = getUser()
  if (!user) return <Routes><Route path="*" element={<Navigate to="/login" replace />} /></Routes>

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ExplorerPage />} />
        <Route path="/asset/:id" element={<AssetDetailPage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Layout>
  )
}