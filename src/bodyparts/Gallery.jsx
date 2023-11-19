import { useState, useEffect } from 'react'

import pic1 from '../assets/gallery/raw01.jpg'
import pic2 from '../assets/gallery/raw02.jpg'
import pic3 from '../assets/gallery/raw03.jpeg'
import pic4 from '../assets/gallery/raw04.jpg'
import pic5 from '../assets/gallery/raw05.jpeg'
import pic6 from '../assets/gallery/raw06.jpg'
import pic7 from '../assets/gallery/raw07.jpg'
import pic8 from '../assets/gallery/raw08.jpg'
import pic9 from '../assets/gallery/raw09.jpg'
import pic10 from '../assets/gallery/raw10.jpg'
import pic11 from '../assets/gallery/raw11.jpg'
import pic12 from '../assets/gallery/raw12.jpg'
import pic13 from '../assets/gallery/raw13.jpg'
import pic14 from '../assets/gallery/raw14.jpg'
import pic15 from '../assets/gallery/raw15.jpg'
import pic16 from '../assets/gallery/raw16.jpg'

import nextLogo from '../assets/next.png'
import prevLogo from '../assets/back.png'

export default function ImageSlider () {

  const images = [pic7, pic10, pic6, pic9, pic5, pic3, pic2, pic8, pic4, 
                  pic1, pic11, pic12, pic13, pic14, pic15, pic16]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const image = document.querySelector('.gallery-image')
    image.style.opacity = 0.1
    setTimeout(() => {
      image.style.opacity = 1
    }, 50)
  }, [currentIndex])
  

  return (
    <div className='gallery'>
      <div className='gallery-wrapper'>
        <h1 className='gallery-title'>Galéria</h1>
        <div className="image-slider">
          <button onClick={prevImage} className='prev-button'>
            <img src={prevLogo} alt='back' className='icon'/>
          </button>
          <img key={currentIndex} 
               src={images[currentIndex]} 
               alt={`Image ${currentIndex + 1}`} 
               className='gallery-image'
              />
          <button onClick={nextImage} className='next-button'>
            <img src={nextLogo} alt='next' className='icon'/>
          </button>
        </div>
      </div>
    </div>
  )
}
