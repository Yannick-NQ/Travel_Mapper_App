import { View } from 'react-native';
import React from 'react';
import { GREY } from '../../constants/LAYOUT_CONST';

export default function HorizontalLine() {
  return (
    <View>
      <View
        style={{ borderWidth: 0.3, marginTop: 10, borderColor: GREY[500] }}
      ></View>
    </View>
  );
}
