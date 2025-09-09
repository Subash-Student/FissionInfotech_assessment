import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App