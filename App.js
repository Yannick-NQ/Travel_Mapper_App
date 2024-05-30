import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignUpScreen, WelcomeScreen, LayoutScreen } from './screens';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { UserLocationContext } from './contextos/UserLocationContext';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

const Stack = createNativeStackNavigator();

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [fontsLoaded] = useFonts({
    xtrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
  });

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso a la ubicación a sido denegada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

    })();


  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='Layout' component={LayoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserLocationContext.Provider>
  );
};