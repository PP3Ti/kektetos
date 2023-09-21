import bed from '../assets/bed.png'
import bathroom from '../assets/bathroom.png'
import kitchen from '../assets/kitchen.png'
import towel from '../assets/towel.png'
import wifi from '../assets/wifi.png'
import grill from '../assets/grill.png'
import heating from '../assets/heating.png'
import ac from '../assets/ac.png'
import car from '../assets/car.png'

export default function Amenities() {
  return (
    <div className="amenities">
      <div className="amenities-wrapper component-wrapper">
        <h1 className="amenities-title">Szolgáltatások</h1>
        <div className="amenities-text">
          <ul>
            <li>
              <img src={bed} alt='bed icon'/>
              3 hálószoba
            </li>
            <li>
              <img src={bathroom} alt="bathroom icon" />
              1.5 fürdőszoba
            </li>
            <li>
              <img src={kitchen} alt="kitchen icon" />
              felszerelt konyha
            </li>
            <li>
              <img src={towel} alt="towel icon" />
              alapvető fürdőszobai kellékek
            </li>
            <li>
              <img src={wifi} alt="wifi icon" />
              wifi
            </li>
          </ul>
          <ul>
            <li>
              <img src={grill} alt="grill icon" />
              grill
            </li>
            <li>
              <img src={heating} alt="heating icon" />
              fűtés
            </li>
            <li>
              <img src={ac} alt="air conditioning icon" />
              légkondicionálás
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