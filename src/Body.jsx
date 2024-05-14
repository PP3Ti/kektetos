import About from "./bodyparts/About.jsx"
import Amenities from "./bodyparts/Amenities.jsx"
import Hero from "./bodyparts/Hero.jsx"
import ImgDisplay from "./bodyparts/ImgDisplay.jsx"
import Gallery from './bodyparts/Gallery.jsx'
import Reviews from './bodyparts/Reviews.jsx'
import BackToTop from "./bodyparts/BackToTop.jsx"
import Location from './bodyparts/Location.jsx'
import Contacts from "./bodyparts/Contacts.jsx"
import Prices from "./bodyparts/Prices.jsx"
import PSA from "./bodyparts/PSA.jsx"

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