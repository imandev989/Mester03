// "use client"
// import Image from 'next/image'
// import React, { useEffect, useState, useRef } from "react";
// import mapbox from "@neshan-maps-platform/mapbox-gl"
// import '@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css';

// export default function MapComponent() {
//   const map = useRef(null);
//   const mapContainer = useRef(null);

//   useEffect(() => {
//     if (map.current != null) return;

//     map.current = new mapbox.Map({
//       container: mapContainer.current,
//       zoom: 11,
//       pitch: 0,
//       center: [59.61519755554187, 36.288250791669896],
//       mapKey: "web.AgDsRCKODrsiSkXMkgpZ1MZni5obWQyP3YCkCrtB",
//     });

//     map.current.on('load', function () {
//       console.log('load');
//       map.current.resize();
//     })

//     map.current.on('moveend', () => {
//       console.log('A movvend event occurred')
//       console.log(map.current.getCenter())
//       console.log(map.current.getBounds())


//     })

//   }, [])

//   const getCenter = () => {
//     // console.log(map.current)
//     console.log(map.current.getCenter())


//   }
//   const getBounds = () => {
//     console.log(map.current.getBounds())
//   }

//   const setMarker = () => {
//     let pos = map.current.getCenter();
//     const marker = new mapbox.Marker()
//       .setLngLat([pos.lng, pos.lat])
//       .setPopup(new mapbox.Popup().setHTML("<h1>Hello World!</h1>"))
//       .addTo(map.current);

//     console.log(marker)
//   }

//   return (
//     <>
//       <div ref={mapContainer} style={{ width: '100vw', height: '90vh', overflow: 'hidden' }}></div>

//       <div>
//         <button onClick={getCenter} style={{ background: 'green', color: 'white', borderRadius: 5, padding: 8 }}>Get Center</button>
//         &nbsp;&nbsp;
//         <button onClick={setMarker} style={{ background: 'green', color: 'white', borderRadius: 5, padding: 8 }}>Set center marker</button>
//         <button onClick={getBounds} style={{ background: 'green', color: 'white', borderRadius: 5, padding: 8 }}>get Bounds</button>

//       </div>
//     </>
//   )
// }

































// // "use client";

// // import NeshanMap, { NeshanMapRef, OlMap, Ol } from "@neshan-maps-platform/react-openlayers"
// // import "@neshan-maps-platform/react-openlayers/dist/style.css"
// // import { useEffect, useRef, useState } from "react"



// // const MapComponent = () => {

// //   const [ol, setOl] = useState()
// //   const [olMap, setOlMap] = useState()

// //   const mapRef = useRef(null);
// //   console.log("MAPREF", mapRef.current)


// //   // var marker = new ol.Feature({
// //   //   geometry: new ol.geom.Point(
// //   //     ol.proj.fromLonLat([-74.006,40.7127])
// //   //   ),  // Cordinates of New York's Town Hall
// //   // });
// //   // var vectorSource = new ol.source.Vector({
// //   //   features: [marker]
// //   // });
// //   // var markerVectorLayer = new ol.layer.Vector({
// //   //   source: vectorSource,
// //   // });
// //   // map.addLayer(markerVectorLayer);



// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       if (mapRef.current?.map) {
// //         console.log("سلام")
// //         console.log(mapRef.current?.map);
// //         // mapRef.current?.map.setMapType("standard-night")
// //         clearInterval(interval)
// //       }
// //     }, 1000)
// //     return () => clearInterval(interval)
// //   }, [])




// //   const onInit = (ol, map) => {

// //     setOl(ol)
// //     setOlMap(map)

// //     //  map.on('click', function (e) {
// //     //         var coordinate = e.coordinate;
// //     //         console.log(e)
// //     //         // alert("1")
// //     //         alert(coordinate)
// //     //         // popupContent.innerHTML = '<p>' + coordinate + '</p>';
// //     //         // overlay.setPosition(coordinate);

// //     //     })


// //     var layer = new ol.layer.Vector({
// //       source: new ol.source.Vector({
// //         features: [
// //           // new ol.Feature({
// //           //   geometry: new ol.geom.Point(
// //           //     ol.proj.fromLonLat([-74.0061, 40.712])
// //           //   ),
// //           // }),
// //           new ol.Feature({
// //             geometry: new ol.geom.Point(
// //               ol.proj.fromLonLat([51.338076, 35.699756])
// //             ),
// //           }),
// //           new ol.Feature({
// //             geometry: new ol.geom.Point(
// //               ol.proj.fromLonLat([36.31638945113043, 59.51397922287185])
// //             ),
// //           }),
// //           new ol.Feature({
// //             geometry: new ol.geom.Point(
// //               ol.proj.fromLonLat([59.513979, 36.316389])
// //             ),
// //           }),
// //           new ol.Feature({
// //             geometry: new ol.geom.Point(
// //               ol.proj.fromLonLat([59.212440, 35.276618])
// //             ),
// //           }),
// //           new ol.Feature({
// //             geometry: new ol.geom.Point(
// //               ol.proj.fromLonLat([51.322630, 35.691768])
// //             ),
// //           }),
// //         ],
// //       }),
// //       style: new ol.style.Style({
// //         image: new ol.style.Icon({
// //           color: "red",
// //           crossOrigin: "anonymous",
// //           src:
// //             "https://openlayers.org/en/latest/examples/data/square.svg",
// //         }),
// //       }),
// //     });
// //     map.addLayer(layer);
// //     console.log("MAP", map);
// //   }
  
// //   return (
// //     <>
// //       <NeshanMap
// //         ref={mapRef}
// //         style={{ width: '100vw', height: '80vh' }}
// //         onInit={onInit}
// //         // center={{ latitude: 36.316389, longitude: 59.513979  }}

// //         mapKey="web.e3802d848110490d9abf8adea5810e87"
// //       ></NeshanMap>
// //     </>
// //   )
// // }
// // export default MapComponent;


