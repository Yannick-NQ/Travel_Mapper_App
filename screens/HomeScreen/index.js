import { Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView className='p-[20px]'>
            <Header />
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;
