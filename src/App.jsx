import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { CartProvider } from './context/CartContext'
import About from './pages/About'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Menu from './pages/Menu'
import NotFound from './pages/NotFound'
import Product from './pages/Product'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="produto/:id" element={<Product />} />
            <Route path="carrinho" element={<Cart />} />
            <Route path="sobre" element={<About />} />
            <Route path="menu" element={<Navigate to="/cardapio" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
