
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GoogleMapReact from 'google-map-react';
import { API_URL, GOOGLE_MAP_API_KEY, } from './config';


import Maker from './components/Maker';
import './App.css';

import myMapStyle from "./silverMapStyle.json"
//import myMapStyle from "./darkMapStyle.json"

import _ from "lodash";


var days = 10;
var date = new Date();
var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
var day = last.getDate();
var month = last.getMonth() + 1;
var year = last.getFullYear();


function App() {

  const initialData = {
    regions: [],
    center: { lat: 40.990, lng: 28.910 },
    startDate: `${year}.${month}.${day}`
  }

  const [data, setData] = useState(initialData);

  //initiation
  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_URL}?startDate=${initialData.startDate}`
      const result = await axios(url);
      console.log({ result })
      const averageLat = _.meanBy(result.data, (p) => parseFloat(p.latitude));
      const averageLng = _.meanBy(result.data, (p) => parseFloat(p.longitude));
      console.log({
        averageLat,
        averageLng
      })
      setData({ ...data, regions: result.data, center: { lat: averageLat, lng: averageLng } });
    };
    fetchData();
  }, []);

  const onClick = (item) => {

    const findIndex = _.findIndex(data.regions, (o) => {
      return o.latitude == item.latitude && o.longitude == item.longitude
    })
    if (findIndex != -1) {
      data.regions[findIndex].clicked = data.regions[findIndex].clicked ? false : true
    }
    console.log({ item, findIndex })
    setData({ ...data })
  }

  return (
    <div className="App">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // defaultZoom={11}
          bootstrapURLKeys={{
            key: GOOGLE_MAP_API_KEY
          }}
          yesIWantToUseGoogleMapApiInternals={true}
          draggable={true}
          defaultZoom={6}
          center={data.center}
          options={{ styles: myMapStyle }}
        >
          {
            data.regions.map((v, i) => {
              return (
                <Maker
                  item={v}
                  onClick={onClick}
                  clicked={v.clicked}
                  text={v.title}
                  key={i}
                  lat={v.latitude}
                  lng={v.longitude}
                />
              )
            })
          }
        </GoogleMapReact>
      </div>
      <div style={{ display: 'none', height: 106, width: 100, backgroundColor: '#FFF', position: 'absolute', bottom: 0, right: 50, zIndex: 800 }}>
        <div onClick={() => setData({ ...data, center: data.center })}>Merkez</div>
      </div>
    </div>
  );
}


export default App;
