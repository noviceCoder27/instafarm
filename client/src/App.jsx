import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Order from './pages/Order'
import Auth from './pages/Auth'

function App() {


  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/products' element = {<Products />} />
        <Route path = "/order" element = {<Order />} />
        <Route path = "/auth" element = {<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
