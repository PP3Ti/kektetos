import view from '../assets/imgdisplay.jpeg'

export default function ImgDisplay() {
  return (
    <div className='img-display' 
          style={{ backgroundImage: `url(${view})`,
                   backgroundRepeat: 'no-repeat', 
                   backgroundSize: 'cover', 
                   backgroundPositionY: '-30rem' 
                }}>
    </div>
  )
}