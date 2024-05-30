import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoogleMapView from './GoogleMapView';
import CategoryList from './CategoryList';
import PlaceList from './PlaceList';
import { UserLocationContext } from '../../contextos/UserLocationContext';
import GlobalApi from '../../Services/GlobalApi';

const HomeScreen = () => {
    const [placeList, setPlaceList] = useState([]);
    const { location, setLocation } = useContext(UserLocationContext);
    useEffect(() => {
        if (location) {
            GetNearBySearchPlace('restaurant');
        }
    }, [location])

    const GetNearBySearchPlace = (value) => {

        GlobalApi.nearByPlace(location.coords.latitude,
            location.coords.longitude, value).then(resp => {

                setPlaceList(resp.data.results);

            })
    }
    return (
        <SafeAreaView style={{ padding: 20, backgroundColor: '#fff', flex: 1 }}>
            <Header />
            <GoogleMapView placeList={placeList} />
            <CategoryList setSelectedCategory={(value) => GetNearBySearchPlace(value)} />
            {placeList ? <PlaceList placeList={placeList} /> : null}
        </SafeAreaView>
    )
}

export default HomeScreen;
