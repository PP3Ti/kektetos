import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

export default function Location() {

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,41]
  })
  
  return (
    <div className="location">
      <div className="location-wrapper component-wrapper">
        <h1 className="location-title">Helyszín</h1>
        <p className='location-text'>
          TODO TEXT
          kektetos vendeghaz zamardi sziveben, kozel a strand, bolt, vasut
        </p>
        <MapContainer center={[46.879402603035295, 17.940180147095152]} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[46.87931411163113, 17.940217586266964]} icon={DefaultIcon}>
            <Popup>
              Kektetos Vendeghaz
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}