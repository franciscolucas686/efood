import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './style'
import Header from './components/Header'
import Footer from './components/Footer'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
