import React from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/css';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={css.container}>
      <MapView 
        style={css.map} 
        initialRegion={{
          latitude: 2.82065,
          longitude: -60.67215,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        loadingEnabled={true}
      >

      </MapView>
      <View style={css.search}></View>
    </View>
  );
}