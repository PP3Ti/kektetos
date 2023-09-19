import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Location() {

  return (
    <div className="location">
      <div className="location-wrapper component-wrapper">
        <h1 className="location-title">Helyszín</h1>
        <MapContainer center={[46.879402603035295, 17.940180147095152]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle 
            center={[46.87931411163113, 17.940217586266964]}
            radius={100} 
            pathOptions={{ fillColor: 'blue', fillOpacity: 0.2 }}
          />
        </MapContainer>
      </div>
    </div>
  )
}