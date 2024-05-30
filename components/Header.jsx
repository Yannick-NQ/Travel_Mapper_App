import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import Icon, { Icons } from './navigation/TabBarIcon';
import { GREY, PRIMARY } from '../constants/LAYOUT_CONST';

const Header = () => {
  return (
    <View className={`flex-row gap-5 justify-evenly items-center`}>
      <Image
        source={require('../assets/images/TravelMapper-logo.png')}
        className='w-[40px] h-[40px] rounded-lg'
      />
      <View className='w-3/5'>
        <TextInput
          className={`border border-slate-600 p-[4px] pl-1 rounded-md `}
        />
      </View>
      <View className='bg-slate-400 w-[40px] justify-center items-center h-[40px] p-1.5 rounded-full'>
        <Icon
          type={Icons.Entypo}
          name={'image'}
          size={20}
          className='text-white'
        />
      </View>
    </View>
  );
};

export default Header;
