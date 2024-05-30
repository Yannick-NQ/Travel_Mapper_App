import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <View className="bg-white flex-1 relative">
            <StatusBar style='dark' />
            {/* Logo Section */}
            <View className="flex-row px-6 mt-12 items-center  space-x-2">
                <Image source={require('../../assets/images/TravelMapper-logo.png')} className="w-12 h-12 rounded-full" />
                <View>
                    <Text className="text-[#d14450] text-xl font-semibold"> Travel Mapper</Text>
                </View>
            </View>

            {/* Body Section */}
            <View className="px-6 mt-8 space-y-1">
                <Text className="text-blue-900 text-[32px] font-semibold">Disfruta el viaje</Text>
                <Text className="text-sky-400 text-[30px] font-bold">con buenos momentos</Text>
                <Text className="text-[#3C6072] text-base">
                    Descubre el mundo de una manera única y emocionante. Inspírate, explora y vive experiencias inolvidables. ¡El viaje de tus sueños comienza aquí!
                </Text>
            </View>

            {/* Circle Section */}
            <View className="w-[300px] h-[300px] bg-sky-400 rounded-full absolute bottom-36 -right-36"></View>
            <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

            {/* Image Section */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image source={require('../../assets/images/traveler_background.png')} className="w-full h-full object-cover mt-20"
                    animation={"fadeIn"}
                    easing="ease-in-out"
                />
                {/* Button Section */}
                <TouchableOpacity onPress={() => navigation.push('Login')} className="p-3 absolute bottom-20 bg-sky-400 rounded-md w-1/2 items-center justify-center">
                    <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"}>
                        <Text className="text-white font-bold text-base text-center">Empezar ahora</Text>
                    </Animatable.View>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default HomeScreen;
