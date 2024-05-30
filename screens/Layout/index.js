import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '../../components/navigation/TabBarIcon';
import MapScreen from '../MapScreen';
import { StatusBar } from 'expo-status-bar';
import TabButton from '../../components/navigation/TabButton';
import HomeScreen from '../HomeScreen';

const Tab = createBottomTabNavigator();

const TabArr = [
    { route: 'Home', label: 'Inicio', type: Icons.Feather, icon: 'home', component: HomeScreen },
    { route: 'Map', label: 'Mapa', type: Icons.Fontisto, icon: 'hipchat', component: MapScreen },
];

const LayoutScreen = () => {
    return (
        <View className='flex-1'>
            <StatusBar style='dark' />
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                {TabArr.map((item, index) => {
                    return (
                        <Tab.Screen key={index} name={item.route} component={item.component}
                            options={{
                                tabBarShowLabel: false,
                                tabBarButton: (props) => <TabButton {...props} item={item} />
                            }}
                        />
                    )
                })}

            </Tab.Navigator>
        </View>
    )
}

export default LayoutScreen;

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        position: 'absolute',
        margin: 16,
        borderRadius: 16,
    },

})