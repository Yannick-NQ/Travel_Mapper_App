import { View, Text, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/TravelMapper-logo.png')}
        className='w-[50px] h-[50px] rounded-2xl'
      />
    </View>
  );
};

export default Header;
