import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Splash from "../Screens/Splash";
import BookAppointment from "../Screens/BookAppointment";
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
