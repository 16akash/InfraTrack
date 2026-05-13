import "./LiveMap.css";

import {

  MapContainer,
  TileLayer,
  Marker,
  Popup,

} from "react-leaflet";

function LiveMap() {

  const locations = [

    {
      id: 1,
      name: "NH-27 Highway Project",
      position: [25.5941, 85.1376], // Patna
      status: "Active",
    },

    {
      id: 2,
      name: "Canal Construction",
      position: [25.3639, 83.6647], // Buxar
      status: "Delayed",
    },

    {
      id: 3,
      name: "Water Pipeline Work",
      position: [24.7914, 84.9916], // Gaya
      status: "Completed",
    },

  ];

  return (

    <div className="map-container">

      <h2>Live Project Tracking</h2>

      <MapContainer
        center={[25.6, 85.1]}
        zoom={7}
        style={{
          height: "400px",
          width: "100%",
        }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc) => (

          <Marker
            key={loc.id}
            position={loc.position}
          >

            <Popup>

              <b>{loc.name}</b>
              <br />
              Status: {loc.status}

            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>
  );
}

export default LiveMap;