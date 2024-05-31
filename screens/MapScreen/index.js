import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../contextos/UserLocationContext";
import PlaceMarker from "./PlaceMarker";

export default function MapScreen(){

    const [mapRegion, setmapRegion] = useState({
        latitude: -15.8327867,
        longitude: -70.0320074,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421, 
    });

    return (
        <View style={{ marginTop: 30 }}>
           <MapView
            style={{
              width: Dimensions.get("screen").width * 0.89,
              height: Dimensions.get("screen").height * 0.23,
              borderRadius: 20
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
            >  
            </MapView>
          
        </View>
    );
}