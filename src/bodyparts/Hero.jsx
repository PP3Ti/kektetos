import bg from '../assets/gallery/konyha2.jpg'

export default function Hero() {
  return (
    <div className="hero">
      <img src={bg} width='100%' alt='hero picture' className='hero-image'/>
      <div className='hero-text'>
        <h1>Kéktetős Vendégház</h1>
        <h4>Üdvözöljük!</h4>
      </div>
    </div>
  )
}