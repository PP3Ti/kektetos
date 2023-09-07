import up from '../assets/up.png'

export default function BatcToTop() {

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <button className="back-to-top" onClick={handleClick}>
      <img src={up} className='back-to-top-logo' alt='up logo'/>
    </button>
  )
}