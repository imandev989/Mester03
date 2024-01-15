import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
  useMapEvent,
  useMap,
  GeoJSON,
  Map,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon, DivIcon } from "leaflet";
import Image from "next/image";

import "./styles.css";
import icon from "./constants";
import myData from "./data.json";
import PopupContent from "@/components/map/PopupContent";
import { animate } from "framer-motion";

import imanMarker from "@/public/Icons/myIcon.png";
import markerShadow from "@/public/Icons/marker-shadow.png";
import imanMarker2 from "leaflet/dist/images/layers.png";
import imanMarker3 from "leaflet/dist/images/layers.png";

// const markerIcon2 = new Icon({iconUrl: markerIcon2})

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: '../icons/marker-icon-2x.png',
//   iconUrl: '../icons/marker-icon.png',
//   shadowUrl: '../icons/marker-shadow.png'
// });

// این ویژگی های تنظیمات اندازه و مشخاصت آیکون میباشد؟
// const myIcon = new L.Icon({
//   icon:imanMarker,
//   iconRetinaUrl:imanMarker,
//   iconUrl:imanMarker,
//   iconSize:[26,26],
//   popupAnchor:[0,-15],
//   shadowUrl:markerShadow,
//   shadowAnchor:[13,28]
// })

const customIcon = () => {
  // return <img src="../../public/Icons/marker.png" />;
  return <Image src="../../public/icons/marker.png" alt="مارکر" />;
};

const points = myData.features.filter((f) => f.properties.subType === "Point");
const circles = myData.features.filter(
  (f) => f.properties.subType === "Circle"
);

function Markers({ data, mapRef }) {
  const map = useMap();
  return (
    data.length > 0 &&
    data.map((marker, index) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              map.setView(
                [
                  marker.geometry.coordinates[1],
                  marker.geometry.coordinates[0],
                ],
                13,
                animate
              );
            },
          }}
          key={index}
          position={{
            lat: marker.geometry.coordinates[1],
            lng: marker.geometry.coordinates[0],
          }}
          // icon={customIcon}
          icon={new Icon({ iconUrl: marker.properties.icon })}
        >
          <Popup className="my-popup custom-font">
            <PopupContent
              name={marker.properties.name}
              imageUrl={marker.properties.imageUrl}
              description={marker.properties.description}
              price={marker.properties.price}
              discount={marker.properties.discount}
            />
          </Popup>
        </Marker>
      );
    })
  );
}

function pointToLayer(feature, latlng) {
  return L.circleMarker(latlng, {
    radius: 100,
    fillColor: "blue",
    color: "blue",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.1,
  });
}

function pointToLayerMarker(feature, latlng) {
  return L.marker(latlng, {
    icon: myIcon,
  });
}

export default function MapContainerNew() {
  const mapRef = useRef();

  // console.log("Points", points)

  const [data, setData] = useState(points);

  // console.log("DATA", data)

  // console.log("MAPREF", mapRef)

  return (
    <MapContainer
      ref={mapRef}
      center={{ lat: 36.2879, lng: 59.6158 }}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
      pointToLayer={pointToLayerMarker}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Markers data={data} mapRef={mapRef} />

      <GeoJSON data={circles} pointToLayer={pointToLayer} />
    </MapContainer>
  );
}
