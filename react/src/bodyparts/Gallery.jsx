import { useState } from 'react'

import pic1 from '../assets/kert-02.jpg'
import pic2 from '../assets/kert-05.jpg'
import pic3 from '../assets/konyha-1.jpg'
import pic4 from '../assets/konyha2-1.jpg'
import pic5 from '../assets/nappali-1.jpg'
import pic6 from '../assets/nappali-4.jpg'
import pic7 from '../assets/szoba2-10.jpg'

import nextLogo from '../assets/next.png'
import prevLogo from '../assets/back.png'

export default function ImageSlider () {

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='gallery'>
      <div className='gallery-wrapper'>
        <h1 className='gallery-title'>Galéria</h1>
        <div className="image-slider">
          <button onClick={prevImage} className='prev-button'>
            <img src={prevLogo} alt='back' className='icon'/>
          </button>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          <button onClick={nextImage} className='next-button'>
            <img src={nextLogo} alt='next' className='icon'/>
          </button>
        </div>
      </div>
    </div>
  )
}
