import "./contactDetails.css"
import data from "../../data/data"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"

export default function ContactDetails() {

  return (
    <div className="contactDetails">
      <div className="contactDetails-content">
        <h2 className="contact-sub-header section-title sectionText">get in touch
          <span className="contact-header sectionText text-upper">contact</span>
        </h2>
        <p className="text">{data.furniture_2}</p>
      </div>
      <div className="contact-items flexColStart">
        <a href="tel:+251931480409">
          <span><FaPhoneAlt size={20} /></span>
          <span>+251 931 480 409</span>
        </a>
        <a href="mailto:yonatanadera@gmail.com">
          <span><MdEmail size={22} /></span>
          <span>yonatanadera@gmail.com</span>
        </a>
        <a href="/">
          <span><FaLocationDot size={20} /></span>
          <span>wesen street, addis abeba, ethiopia</span>
        </a>
      </div>
    </div>
  )
}