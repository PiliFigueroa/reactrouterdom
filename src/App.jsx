import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Episodes, Characters, Locations, Error404 } from './pages'

function App() {
  // https://github.com/matiasbenary/rutas/blob/main/ejercicios.md
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episode" element={<Episodes />} />
            <Route path="/character" element={<Characters />} />
            <Route path="/location" element={<Locations />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
