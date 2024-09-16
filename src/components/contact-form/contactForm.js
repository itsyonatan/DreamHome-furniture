import "./contactForm.css"

export default function ContactForm() {

  return (
    <div className="contactForm">
      <form className="contactForm-content">
        <label>name:</label>
        <input type="text" />
        <label>email:</label>
        <input type="text" />
        <label>comment or message:</label>
        <textarea name="comment" rows={4}/>
        <button className="black-btn submit-form">submit</button>
      </form>
    </div>
  )
}