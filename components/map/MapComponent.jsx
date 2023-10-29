// 'use client'

// import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Circle, useMapEvent, useMap, GeoJSON, Map } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { Icon } from "leaflet";
// import L from "leaflet";
// // import { iconPerson } from './Icon';
// // Import custom marker icon image
// import markerIcon from '@/public/Icons/marker.png'
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import "./styles.css"

// // function GetIcon(_iconSize){
// //   return L.icon( options: {
// //     iconUrl: require("../public/Icons/marker.png"),
// //     iconSize:[_iconSize]
// //   }

// //   )
// // }

// // const skater = new Icon({
// //   iconUrl: "../public/Icons/marker.png",
// //   iconSize: [25, 25]
// // });


// // Import local GeoJSON file
// import myData from './data.json';
// import PopupContent from '@/components/map/PopupContent';
// import { useState, useRef, useEffect } from 'react';


// function pointToLayer(feature, latlng) {
//   return L.circleMarker(latlng, {
//     radius: 100,
//     fillColor: 'blue',
//     color: 'blue',
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.1,

//   });
// }

// export default function MapContainerNew() {
//   const mapRef = useRef();
//   const animateRef = useRef(true)

//   const [clicked, setClicked] = useState(false);
//   const [position, setPosition] = useState([36.2879, 59.6158]);
//   useEffect(() => {
//     console.log("MAPREF", mapRef)

//   }, [mapRef, position])

//   console.log("myDATA", myData)
//   // const position = [36.2879, 59.6158]
//   // const dynamicPostition = useState(position);
//   const center = [36.2879, 59.6158]

//   const fillBlueOptions = { fillColor: 'blue' }

//   function FindCenter() {
//     const map = useMap()
//     console.log('map center:', map.getCenter())
//     // console.log('map bounds', map.getBounds());
//     return null
//   }

//   function MyPoint() {
//     const map = useMapEvent('click', () => {
//       // map.setView([50.5, 30.5], map.getZoom())
//       alert("IMAN")
//     })
//     return null
//   }

//   function SetViewOnClick({ animateRef }) {
//     const map = useMapEvent('click', (e) => {
//       map.setView(e.latlng, map.getZoom(), {
//         animate: animateRef.current || false,
//       })
//     })
  
//     return null
//   }

//   function MyDrag() {
//     const map = useMap();
//     const mapEvent = useMapEvent('moveend', () => {
//       console.log('map bounds', map.getBounds());
//       console.log('map center:', map.getCenter())

//       // alert("MOVED")
//     })
//     return null
//   }



//   const changeCenter = (latlang) => {
//     const coordinates = Object.values(latlang);
//     console.log("CHANGECHANEG", latlang)
//     console.log("MAPREF", mapRef)
//     console.log("CorD", coordinates)
//     setPosition(latlang)
  
    


//   }

//   const ChangeCenter = (e) => {
//     // const coordinates = Object.values(latlang);
//     // console.log("CHANGECHANEG", latlang)
//     // console.log("MAPREF", mapRef)
//     // console.log("CorD", coordinates)
//     // setPosition(latlang)
    
//     const map = useMapEvent('click', (e) => {
//       map.setView(e.latlng, map.getZoom())
//     })
  
//     return null


//   }

//   // function MyDrag() {
//   //   const map = useMapEvent('moveend', () => {
//   //     const mMap = useMap()
//   //     let newBounds = mMap.getBounds();
//   //     // map.setView([50.5, 30.5], map.getZoom())
//   //     alert("newBounds", newBounds)
//   //   })
//   //   return null
//   // }


//   // Create DivIcon instance for custom marker
//   // const myIcon = new L.DivIcon({
//   //   iconSize: [25, 41],
//   //   iconAnchor: [10, 41],
//   //   popupAnchor: [2, -40],
//   //   iconUrl: markerIcon,
//   //   shadowUrl: iconShadow
//   //   // iconUrl:'marker-icon.png',
//   //   // shadowUrl:'marker-shadow.png'
//   // })

//   // let time = (new Date()).getTime();
//   // function test() {
//   //   if ((new Date()).getTime() - time > 2900) {

//   //   }
//   // }

//   // function test1() {
//   //   time = (new Date()).getTime();
//   //   setTimeout(test, 3000);
//   // }

//   L.Icon.Default.mergeOptions({
//     iconRetinaUrl: '../icons/marker-icon-2x.png',
//     iconUrl: '../icons/marker-icon.png',
//     shadowUrl: '../icons/marker-shadow.png'
//   });

//   const points = myData.features.filter(f => f.geometry.type === 'Point');
//   const circles = myData.features.filter(f => f.properties.subType === 'Circle');
//   // console.log("MYDATA", myData)
//   // console.log("POINTS", points);
//   // console.log("CIRCLES", circles)
//   return (
//     <div className='h-[100vh] '>
//       <MapContainer ref={mapRef}
//         //  center={position} 
//         center={{ lat: 36.2879, lng: 59.6158 }}

//         zoom={13}
//         scrollWheelZoom={true}
//         style={{ height: '100vh' }}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <FindCenter />
//         {/* <MyPoint /> */}
//         <MyDrag />
//         <SetViewOnClick animateRef={animateRef} />
//         {/* <ChangeCenter/> */}

//         {/* <Marker position={position}
//         // icon={myIcon}
//         eventHandlers={{
//           click: () => {
//             alert('marker clicked')
//           },
//         }}>
//         <Popup>
//           <h1>سلام ایمان جان</h1>
//         </Popup>
//       </Marker> */}

//         {/* <LayerGroup>
//           <Circle center={center} pathOptions={fillBlueOptions} radius={900} />

//         </LayerGroup> */}



//         {points.map((feature) => {
//            console.log("FETURE", feature)
//           // <Popup
//           //   position={feature.geometry.coordinates}
//           //   key={feature.properties.name}
//           // >
//           //   {/* {alert(feature.properties.name)} */}
//           //   {console.log(feature.properties.name)}
//           //   {feature.properties.name}
//           // </Popup>
//           return <Marker position={feature.geometry.coordinates}
//             key={feature.properties.name}
//             //   icon={new Icon({
//             //     iconSize: clicked ? [25, 41] : [20, 32]  
//             //   })}
//             // eventHandlers={{
//             //   click: () => {
//             //     setClicked(!clicked)
//             //     alert(clicked)
//             //   },
//             // }}
//             // onClick={() => console.log("!clicked")} 



//             eventHandlers={{
//               click: (e) => {
//                 // alert('Marker clicked', e)
//                  console.log("EEEE", e.latlng);
//                 // ChangeCenter(e);
              

//               },
//             }}




            
//           >
//             <Popup className='my-popup custom-font'>
//               <PopupContent name={feature.properties.name} imageUrl={feature.properties.imageUrl} description={feature.properties.description} price={feature.properties.price} discount={feature.properties.discount} />
//             </Popup>
//           </Marker>
//         })}

//         <GeoJSON
//           data={circles}
//           pointToLayer={pointToLayer}
//         />

//       </MapContainer>
//     </div>
//   )
// }
