import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import Login from './src/screens/Login';
import { LinearGradient } from 'expo-linear-gradient';
import Register from './src/screens/Register';



const StackNavigator = createNativeStackNavigator({
  screens: {
    Login: {
      screen: Login,
      options: {
        title: "Login",
        headerTintColor: "white",
        headerBackground: () => (
          <LinearGradient
            colors={['#1e3c72', '#dcedc1']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        ),
      },
    },
    Register: {
      screen: Register,
      options: {
        title: "Register",
        headerTintColor: "white",
        headerBackground: () => (
          <LinearGradient
            colors={['#1e3c72', '#dcedc1']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        ),
      },
    }
  }
})

const Navigation = createStaticNavigation(StackNavigator);


export default function App() {
  return (
    <Navigation />
  );
}


