import { logout } from './auth'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '1rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>MaxiDAM</h1>
        <button onClick={() => { logout(); location.reload(); }}>Déconnexion</button>
      </header>
      <main style={{ marginTop: '2rem' }}>{children}</main>
    </div>
  )
}
