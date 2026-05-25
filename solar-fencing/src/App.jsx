import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Enquiry from './pages/Enquiry'
import "@fontsource/cinzel/700.css";
import "@fontsource/inter/400.css";
import { HelmetProvider } from 'react-helmet-async'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/enquiry' element={<Enquiry />} />
    </Routes>
  )
  ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
}