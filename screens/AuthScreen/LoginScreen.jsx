import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';

const LoginScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className='bg-white h-full w-full'>
      <StatusBar style='light' />
      {/* Image Background */}
      <Image
        className='h-full w-full absolute'
        source={require('../../assets/images/background.png')}
      />
      {/* Lights */}
      <View className='flex-row justify-around w-full absolute'>
        <Animatable.Image
          animation={'fadeInDown'}
          fadeDuration={1000}
          delay={200}
          className='h-[160] w-[65]'
          source={require('../../assets/images/light.png')}
        />
        <Animatable.Image
          animation={'fadeInDown'}
          fadeDuration={1000}
          delay={400}
          className='h-[125] w-[50]'
          source={require('../../assets/images/light.png')}
        />
      </View>
      {/* Title and form */}
      <View className='h-full w-full flex justify-around pt-40 pb-10'>
        {/* Title */}
        <View className='flex items-center'>
          <Animatable.Text
            animation={'fadeInDown'}
            fadeDuration={1000}
            springify
            className='text-white font-bold tracking-wider text-4xl'
          >
            Iniciar Sesión
          </Animatable.Text>
        </View>
        {/* Form */}
        <View className='flex items-center mx-4 space-y-4'>
          <Animatable.View
            animation={'fadeInUp'}
            fadeDuration={1000}
            springify
            className='bg-black/5 p-5 rounded-2xl w-full'
          >
            <TextInput
              placeholder='Correo Electronico'
              placeholderTextColor={'gray'}
            />
          </Animatable.View>
          <Animatable.View
            animation={'fadeInUp'}
            fadeDuration={1000}
            springify
            delay={200}
            className='bg-black/5 p-5 rounded-2xl w-full'
          >
            <TextInput
              placeholder='Contraseña'
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animatable.View>
          <Animatable.View
            animation={'fadeInUp'}
            fadeDuration={1000}
            delay={400}
            springify
            className='w-full'
          >
            <TouchableOpacity
              onPress={() => {
                navigation.push('Home');
              }}
              className='w-full bg-sky-500 p-3 rounded-md mb-3'
            >
              <Text className='text-lg font-bold text-white text-center'>
                Ingresar
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            animation={'fadeInUp'}
            fadeDuration={1000}
            springify
            delay={600}
            className='flex-row justify-center'
          >
            <Text>¿Aún no tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text className='text-sky-600'>Registrarme</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
