import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { UserLocationContext } from "../../contextos/UserLocationContext";
import GlobalApi from "../../Services/GlobalApi";
import SearchBar from "./SearchBar";
import GoogleMapViewFull from "./GoogleMapViewFull";
import BusinessList from "./BusinessList";
import { SafeAreaView } from "react-native-safe-area-context";

const MapScreen = () => {

    const [placeList, setPlaceList] = useState([]);
    const { location, setLocation } = useContext(UserLocationContext);

    useEffect(() => {
        GetNearBySearchPlace('restaurant');
    }, [])

    const GetNearBySearchPlace = (value) => {
        GlobalApi.searchByText(value).then(resp => {

            setPlaceList(resp.data.results);

        })
    }

    return (
        <SafeAreaView>
            <SafeAreaView style={{ position: 'absolute', zIndex: 20 }}>
                <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
            </SafeAreaView>

            <GoogleMapViewFull placeList={placeList} />
            <View style={{ position: 'absolute', zIndex: 20, bottom: 0 }}>
                <BusinessList placeList={placeList} />
            </View>

        </SafeAreaView>
    );
}

export default MapScreen;