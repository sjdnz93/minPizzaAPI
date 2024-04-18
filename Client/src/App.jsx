import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Pizza from './components/Pizza'
import Pasta from './components/Pasta'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizza />} />
          <Route path="/pasta" element={<Pasta />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
