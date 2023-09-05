import About from "./bodyparts/About"
import Amenities from "./bodyparts/Amenities"
import Hero from "./bodyparts/Hero"
import ImgDisplay from "./bodyparts/ImgDisplay"
import Gallery from './bodyparts/Gallery'

export default function Body() {
  return (
    <div className="body">
      <Hero />
      <About />
      <ImgDisplay />
      <Amenities />
      <Gallery />
    </div>
  )
}