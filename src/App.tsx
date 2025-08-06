// src/App.tsx
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AssetDetailPage } from './AssetDetailPage'
import { UploadPage } from './UploadPage'

export default function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/upload">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Bienvenue dans MaxiDAM</div>} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/asset/:id" element={<AssetDetailPage />} />
      </Routes>
    </div>
  )
}
