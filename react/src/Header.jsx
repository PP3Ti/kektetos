import logo from './assets/logo.png'

export default function Header() {
  return (
    <header>
      <img src={ logo } alt="logo" className='header-logo'/>
      <ul className='navbar'>
        <li>Rólunk</li>
        <li>Szolgáltatások</li>
        <li>Galéria</li>
        <li>Helyszín</li>
        <li>Kapcsolat</li>
      </ul>
    </header>
  )
}