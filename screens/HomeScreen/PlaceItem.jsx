import { View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import HorizontalLine from './HorizontalLine';
import { GREY, WARNING } from '../../constants/LAYOUT_CONST';
export default function PlaceItem({ place }) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
      }}
    >
      {place?.photos ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo' +
              '?maxwidth=400' +
              '&photo_reference=' +
              place?.photos[0]?.photo_reference +
              '&key=AIzaSyApZVDndrveWic7_bTXdHaxiD5j7Xt_VOYs',
          }}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require('../../assets/images/placeholder.jpg')}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, marginBottom: 5, fontFamily: 'bold' }}
        >
          {place.name}
        </Text>
        <Text
          style={{ fontSize: 16, marginBottom: 5, color: GREY[700] }}
          numberOfLines={2}
        >
          {place.vicinity}
        </Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            flexDirection: 'row',
          }}
        >
          <AntDesign name='star' size={20} color={WARNING.main} />
          <Text>{place.rating}</Text>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
