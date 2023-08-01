import Footer from "./Components/Footer/Footer"
import Menu from "./Components/Menu/Menu"
import Navbar from "./Components/Navbar/Navbar"


const Layout = ({children}: any) => {
  return (
    <div className="main">
        <Navbar/>
        <div className="container">
            <div className="menuContainer">
                <Menu/>
            </div>
            <div className="contentContainer">
            {children}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout