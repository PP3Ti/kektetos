import { useState } from "react"
import phoneIcon from '../assets/phone.svg'
import emailjs from '@emailjs/browser'

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

  emailjs.init('HNsEnbAyvSdzMdDy1') //my public key 

  function handleSubmit(e) {
    e.preventDefault()

    const emailParams = {
      from_name: name,
      from_email: email, 
      message: message
    }

    console.log(emailParams)

    emailjs
      .send('service_t47k3b8', 'template_4mkw6sn', emailParams)
      .then( 
        function (response) {
          console.log('Email sent successfully:', response)
          setFormData({ name: '', email: '', message: '' })
        },
        function (error) {
          console.error('Email send failed:', error)
        }
      )
  }

  return (
    <div className="contacts">
      <div className="contacts-wrapper component-wrapper">
        <h1 className="contacts-title">Lépjen velünk kapcsolatba!</h1>
        <div className="contact-telephone">
          <img src={phoneIcon} alt="phone icon" />
          <p>: +36 30 410 4624 </p>
        </div>
        <form onSubmit={handleSubmit}>
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