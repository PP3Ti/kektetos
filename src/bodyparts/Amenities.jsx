import person from '../assets/person.png'
import bed from '../assets/bed.png'
import kitchen from '../assets/kitchen.png'
import towel from '../assets/towel.png'
import wifi from '../assets/wifi.png'
import grill from '../assets/grill.png'
import heating from '../assets/heating.png'
import car from '../assets/car.png'
import micro from '../assets/microwave.png'
import coffee from '../assets/coffee.png'

export default function Amenities() {
  return (
    <div className="amenities">
      <div className="amenities-wrapper component-wrapper">
        <h1 className="amenities-title">Szolgáltatások</h1>
        <div className="amenities-text">
          <ul>
            <li>
              <img src={person} alt='person icon' />
              8+1 fő
            </li>
            <li>
              <img src={bed} alt='bed icon'/>
              3 hálószoba, 4 francia ágy
            </li>
            <li>
              <img src={towel} alt="towel icon" />
              140 x 70 törölközők
            </li>
            <li>
              <img src={heating} alt="heating icon" />
              fűtés, légkondicionálás
            </li>
            <li>
              <img src={wifi} alt="wifi icon" />
              wifi
            </li>
          </ul>
          <ul>
            <li>
              <img src={kitchen} alt="kitchen icon" />
              felszerelt konyha
            </li>
            <li>
              <img src={coffee} alt='coffeemachine icon' />
              Nespresso kávéfőző
            </li>
            <li>
              <img src={micro} alt='microwave icon' />
              mikrohullámú sütő
            </li>
            <li>
              <img src={grill} alt="grill icon" />
              grill
            </li>
            <li>
              <img src={car} alt="car icon" />
              autóbeálló
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}