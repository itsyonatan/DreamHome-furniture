import "./footer.css"
import data from "../../data/data"
import { FaFacebook, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function Footer() {

  return (
    <div className="footer">
      <div className="footer-content flexColStart">
        <div className="footer-about">
          <h1 className="footer-header">DreamHome</h1>
          <p className="footer-text text">{data.footer}</p>
        </div>
        <div className="quick-link text-cap">
          <h2 className="quick-link-header">quick links</h2>
          <ul className="links flexColStart">
            <li className="link"><Link to="/">home</Link></li>
            <li className="link"><Link to="/">about us</Link></li>
            <li className="link"><Link to="/">products</Link></li>
            <li className="link"><Link to="/">blog</Link></li>
            <li className="link"><Link to="/">contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact flexColStart">
          <h2 className="contact-header">contact</h2>
          <div className="contact-items flexColStart">
            <a href="tel:+251931480409">
              <span><FaPhoneAlt size={20}/></span>
              <span>+251 931 480 409</span>
            </a>
            <a href="mailto:yonatanadera@gmail.com">
              <span><MdEmail size={22}/></span>
              <span>yonatanadera@gmail.com</span>
            </a>
            <a href="#">
              <span><FaLocationDot size={20}/></span>
              <span>wesen street, addis abeba, ethiopia</span>
            </a>
            <div className="social text-cap">
              <h2 className="social-header">follow us</h2>
              <div className="social-media-link flexCenter">
                <FaFacebook size={22}/>
                <FaSquareXTwitter size={22}/>
                <FaInstagramSquare size={22}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p className="text">copyright &copy; 2024 DreamHome | Powered by <span>YoniTech</span></p>
      </div>
    </div>
  )
}
