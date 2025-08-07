export function getUser() {
  try {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function logout() {
  try {
    localStorage.removeItem('user')
  } catch {}
}
