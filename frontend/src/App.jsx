import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import halaman (akan dibuat setelah ini)
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UploadCVPage from './pages/UploadCVPage'
import DashboardPage from './pages/DashboardPage'
import CVReviewPage from './pages/CVReviewPage'
import WishlistPage from './pages/WishlistPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/upload" element={<UploadCVPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/cv-review" element={<CVReviewPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
  )
}

export default App