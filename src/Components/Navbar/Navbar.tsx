import "./Navbar.scss"
import search from "../../assets/search.svg"
import logo from "../../assets/logo (1).svg"
import app from "../../assets/app.svg"
import expand from "../../assets/expand.svg"
import setting from "../../assets/setting.svg"
import notification from "../../assets/notifications.svg"

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>Sameer DashBoard</span>
      </div>
      <div className="icons">
        <img src={search} alt="" />
        <img src={app} alt="" />
        <img src={expand} alt="" />
        <div className="notification">
        <img src={notification} alt="" />
          <span>1</span>
        </div>
        <div className="user">
        <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Sameer</span>
        </div>
        <img src={setting} alt="" />
      </div>
    </div>
  )
}

export default Navbar