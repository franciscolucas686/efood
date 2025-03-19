import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageRestaurant from './pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/PageRestaurant/:id" element={<PageRestaurant />} />
  </Routes>
)

export default Rotas
