import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import BookShowAI from './pages/BookShowAI.jsx'
import NeverMissed from './pages/NeverMissed.jsx'
import ReviewRocket from './pages/ReviewRocket.jsx'
import BeautifulReactivation from './pages/BeautifulReactivation.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book-show-ai" element={<BookShowAI />} />
        <Route path="/never-missed" element={<NeverMissed />} />
        <Route path="/review-rocket" element={<ReviewRocket />} />
        <Route path="/beautiful-reactivation" element={<BeautifulReactivation />} />
      </Routes>
    </Router>
  </StrictMode>,
)
