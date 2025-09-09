import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import TrustedBrands from './components/TrustedBrands.jsx'
import { useTheme } from './context/ThemeContext'

function App() {
  const { darkTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <TrustedBrands />
    </div>
  )
}

export default App