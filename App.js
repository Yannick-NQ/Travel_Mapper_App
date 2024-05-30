import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, SignUpScreen, WelcomeScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};