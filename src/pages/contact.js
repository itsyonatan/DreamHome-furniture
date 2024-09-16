import ContactForm from "../components/contact-form/contactForm";
import ContactDetails from "../components/contactDetails/contactDetails";

export default function Contact() {

  return (
    <div className="contact">
      <div className="page-header flexCenter">
        <div className="background-overlay"></div>
        <h1 className="page-title">contact us</h1>
      </div>
      <div className="contact-container flexBetween">
        <div className="contactForm">
          <ContactForm />
        </div>
        <div className="contactDetails">
          <ContactDetails />
        </div>
      </div>
    </div>
  )
}