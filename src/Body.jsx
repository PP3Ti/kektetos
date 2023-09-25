import About from "./bodyparts/About"
import Amenities from "./bodyparts/Amenities"
import Hero from "./bodyparts/Hero"
import ImgDisplay from "./bodyparts/ImgDisplay"
import Gallery from './bodyparts/Gallery'
import Reviews from './bodyparts/Reviews'
import BackToTop from "./bodyparts/BackToTop"
import Location from './bodyparts/Location'
import Contacts from "./bodyparts/Contacts"
import Prices from "./bodyparts/Prices"
import PSA from "./bodyparts/PSA"

export default function Body() {
  return (
    <div className="body">
      <Hero />
      <About />
      <BackToTop />
      <ImgDisplay />
      <Amenities />
      <Gallery />
      <Reviews />
      <Location />
      <Prices />
      <PSA />
      <Contacts />
    </div>
  )
}