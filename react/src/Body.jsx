import About from "./bodyparts/About"
import Amenities from "./bodyparts/Amenities"
import Hero from "./bodyparts/Hero"
import ImgDisplay from "./bodyparts/ImgDisplay"
import Gallery from './bodyparts/Gallery'
import Reviews from './bodyparts/Reviews'
import BatcToTop from "./bodyparts/BactoToTop"

export default function Body() {
  return (
    <div className="body">
      <Hero />
      <About />
      <BatcToTop />
      <ImgDisplay />
      <Amenities />
      <Gallery />
      <Reviews />
    </div>
  )
}