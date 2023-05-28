import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import { HeaderPage } from './pages/header'
import ONasPage from './pages/oNas'
import SkidkiPage from './pages/Skidki'
import KatalogPage from './pages/katalog'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/contact'} element={<ContactPage />} />
          <Route path={'/oNas'} element={<ONasPage />} />
          <Route path={'/Skidki'} element={<SkidkiPage />} />
          <Route path={'/Katalog'} element={<KatalogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
