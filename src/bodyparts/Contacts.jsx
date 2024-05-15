import { useState } from "react"
import phoneIcon from '../assets/phone.svg'
import mailIcon from '../assets/mail.svg'

export default function Contacts() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formData

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="contacts">
      <div className="contacts-wrapper component-wrapper">
        <h1 className="contacts-title">Lépjen velünk kapcsolatba!</h1>
        <div className="contact-telephone">
          <img src={phoneIcon} alt="phone icon" />
          <p>: +36 30 410 4624 </p>
        </div>
        <div className="contact-email">
          <img src={mailIcon} alt="mail icon" />
          <p>: kektetos@gmail.com</p>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />  
          <div className="form-group">
            <input 
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Név"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows="10"
              placeholder="Üzenet"
              required
            ></textarea>
          </div>
          <button type="submit">Küldés</button>
        </form>
      </div>
    </div>
  )
}