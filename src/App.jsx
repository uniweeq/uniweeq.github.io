import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Kuppi from './pages/Kuppi'
import WellnessBuddy from './pages/WellnessBuddy'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-1 px-6 py-12">
          <div className="mx-auto w-full max-w-5xl">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/kuppi" element={<Kuppi />} />
              <Route path="/projects/wellness-buddy" element={<WellnessBuddy />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
