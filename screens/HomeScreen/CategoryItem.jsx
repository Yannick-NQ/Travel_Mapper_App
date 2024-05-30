import { View, Text, Image } from 'react-native';
import React from 'react';
import { GREY } from '../../constants/LAYOUT_CONST';

export default function CategoryItem({ category }) {
  return (
    <View
      style={{
        padding: 5,
        alignItems: 'center',
        margin: 5,
        width: 95,
        height: 95,
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: GREY[100],
      }}
    >
      <Image source={category.icon} style={{ width: 40, height: 30 }} />
      <Text style={{ fontSize: 13, fontFamily: 'medium' }}>
        {category.name}
      </Text>
    </View>
  );
}
