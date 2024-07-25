import { useState } from "react"
import './nav.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import images from "../../data/images"

export default function Nav() {
  const [toggleOn, setToggleOn] = useState(false);

  const Menu = () => {
    return (
      <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </>
    )
  }
  return (
    <div className="nav">
      <div className="nav-content">
        <div className="logo">
          <Link to="/"><img src={images.logo} alt="logo" className="logo-image" /></Link>
        </div>
        <div className="row-menu-container">
          <ul className="flexCenter">
            <Menu />
          </ul>
        </div>
        <div className="navbar-menu">
          {toggleOn ?
            <button className="toggle-btn" onClick={() => setToggleOn(false)} ><FaTimes size={26} /></button>
            :
            <button className="toggle-btn" onClick={() => setToggleOn(true)}><FaBars size={26} /></button>

          }
        </div>
      </div>
      {toggleOn && (<div className="column-menu-container">
        <ul className="flexColStart text">
          <Menu />
        </ul>
      </div>)
      }
    </div>
  )
}      