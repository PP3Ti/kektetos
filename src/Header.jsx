import logo from './assets/logo.png'

export default function Header() {

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

  function handleLogoClick() {
    window.scrollTo({top:0, behavior:'smooth'})
  }

  return (
    <header>
      <img src={ logo } alt="logo" className='header-logo' onClick={handleLogoClick}/>
      <ul className='navbar'>
        <li onClick={handleAboutClick}>Rólunk</li>
        <li onClick={handleAmenitiesClick} id='header-amenities'>Szolgáltatások</li>
        <li onClick={handleGalleryClick}>Galéria</li>
        <li onClick={handleLocationClick}>Helyszín</li>
        <li onClick={handlePricesClick}>Árak</li>
        <li onClick={handleContactsClick}>Kapcsolat</li>
      </ul>
    </header>
  )
}