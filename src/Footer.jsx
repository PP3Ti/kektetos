import logo from './assets/logo.png'

export default function Footer() {

  function handleAboutClick() {
    const about = document.querySelector('.about')
    about.scrollIntoView({behavior: 'smooth'})
  }

  function handleAmenitiesClick() {
    const amenities = document.querySelector('.amenities')
    amenities.scrollIntoView({behavior: 'smooth'})
  }

  function handleGalleryClick() {
    const gallery = document.querySelector('.gallery')
    gallery.scrollIntoView({behavior: 'smooth'})
  }

  function handleLocationClick() {
    const location = document.querySelector('.location')
    location.scrollIntoView({behavior: 'smooth'})
  }

  function handleContactsClick() {
    const contacts = document.querySelector('.contacts')
    contacts.scrollIntoView({behavior: 'smooth'})
  }

  function handlePricesClick() {
    const prices = document.querySelector('.prices')
    prices.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <footer>
      <div className="footer-wrapper component-wrapper">
        <div className="house-info">
          <img className="footer-logo" src={logo} />
          <ul className='footer-contacts'>
            <li>8621 Zamárdi, Jókai utca 15.</li>
            <li>+36 30 410 4624</li>
            <li>kektetos@gmail.com</li>
          </ul>
          <ul className='footer-navbar'>
            <li onClick={handleAboutClick}>Rólunk</li>
            <li onClick={handleAmenitiesClick}>Szolgáltatások</li>
            <li onClick={handleGalleryClick}>Galéria</li>
            <li onClick={handleLocationClick}>Helyszín</li>
            <li onClick={handlePricesClick}>Árak</li>
            <li onClick={handleContactsClick}>Kapcsolat</li>
          </ul>
        </div>
        <div className="dev-info">
          Copyright Kéktetős Vendégház © 2023
        </div>
      </div>
    </footer>
  )
}