import "../styles/Map.scss";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import pin from "../assets/location-pin.svg";
import L from "leaflet";
import { PositionState as MapProps } from "./SearchBar";

const pinIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [41, 51], 
    iconAnchor: [20, 51], 
    popupAnchor: [0, -51]
})

function Map(props: MapProps) {
    const { position } = props;
    const lat = parseFloat(position.lat);
    const lng = parseFloat(position.lng);

    console.log(lat);
    console.log(lng);

    return (
        <section id="map-container">
            <div id="mapid">
                <MapContainer
                center={[lat, lng]}
                zoom={8}
                >
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                    position={[lat, lng]}
                    icon={pinIcon}
                    >
                    </Marker>
                </MapContainer> 
            </div>
        </section>
    )
};

export default Map;