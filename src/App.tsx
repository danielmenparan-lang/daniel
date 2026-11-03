import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GalleryPage } from './pages/GalleryPage'
import { DemoPage } from './pages/DemoPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/demo/:slug" element={<DemoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
