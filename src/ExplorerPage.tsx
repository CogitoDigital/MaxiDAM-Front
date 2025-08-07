import React, { useEffect, useState, useRef } from 'react'

const mockAssets = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  name: `Asset_${i + 1}.jpg`,
  folder: i < 50 ? 'images' : 'videos',
  tags: i % 3 === 0 ? ['tag1', 'important'] : ['tag2'],
  preview: `https://placehold.co/300x200?text=Asset+${i + 1}`
}))

export function ExplorerPage() {
  const [visible, setVisible] = useState(30)
  const loader = useRef(null)
  const [selected, setSelected] = useState<number[]>([])

  const handleScroll = (entries: any[]) => {
    const target = entries[0]
    if (target.isIntersecting) setVisible(v => Math.min(v + 30, mockAssets.length))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 1.0 })
    if (loader.current) observer.observe(loader.current)
    return () => observer.disconnect()
  }, [])

  const handleClick = (id: number, e: React.MouseEvent) => {
    if (e.ctrlKey || e.metaKey) {
      setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
    } else {
      setSelected([id])
    }
  }

  return (
    <div>
      <h2 style={{ marginBottom: 10 }}>Explorer</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
        {mockAssets.slice(0, visible).map(asset => (
          <div
            key={asset.id}
            onClick={(e) => handleClick(asset.id, e)}
            style={{
              border: selected.includes(asset.id) ? '2px solid blue' : '1px solid #ccc',
              borderRadius: 8,
              padding: 8,
              cursor: 'pointer',
              background: '#fff'
            }}
          >
            <img src={asset.preview} alt={asset.name} style={{ width: '100%', borderRadius: 4 }} />
            <div><strong>{asset.name}</strong></div>
            <div style={{ fontSize: 12, color: '#666' }}>{asset.folder}</div>
            <div style={{ fontSize: 12 }}>{asset.tags.join(', ')}</div>
          </div>
        ))}
      </div>
      <div ref={loader} style={{ height: 40, marginTop: 20 }}></div>
    </div>
  )
}
