import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageRestaurant from './pages/Restaurant'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/PageRestaurant/:id" element={<PageRestaurant />} />
    <Route
      path="/checkout"
      element={
        <Checkout
          onClose={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      }
    />
  </Routes>
)

export default Rotas
