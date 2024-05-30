import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '../../components/navigation/TabBarIcon';
import MapScreen from '../MapScreen';
import { StatusBar } from 'expo-status-bar';
import TabButton from '../../components/navigation/TabButton';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import FavScreen from '../FavScreen';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const TabArr = [
    { route: 'Home', label: 'Inicio', type: Icons.Feather, icon: 'home', component: HomeScreen },
    { route: 'Map', label: 'Explorar', type: Icons.Feather, icon: 'map', component: MapScreen },
    { route: 'Favorite', label: 'Favoritos', type: Icons.Ionicons, icon: 'heart-outline', component: FavScreen },
    { route: 'Profile', label: 'Perfil', type: Icons.FontAwesome, icon: 'user-circle-o', component: ProfileScreen },

];

const LayoutScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

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