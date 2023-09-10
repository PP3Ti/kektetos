import bg from '../assets/gallery/konyha2.jpg'

export default function Hero() {
  return (
    <div className="hero">
      <img src={bg} width='100%' alt='hero picture' className='hero-image'/>
      <div className='hero-text'>
        <h4>Kéktetős Vendégház</h4>
        <h1>Üdvözöljük!</h1>
      </div>
    </div>
  )
}