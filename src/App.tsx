import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Products from "./Pages/Products/Products"
import Users from "./Pages/Users/Users"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import "./Styles/Global.scss"
import Product from "./Pages/Product/Product"
import User from "./Pages/User/User"

const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<User/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App