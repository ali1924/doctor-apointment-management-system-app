import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Splash from "../Screens/Splash";
import BookAppointment from "../Screens/BookAppointment";
import Success from "../Screens/Success";
import CallAmbulance from "../Screens/CallAmbulance";
import Pending from "../Screens/Pending";
import Completed from "../Screens/Completed";
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
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Completed"
        component={Completed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pending"
        component={Pending}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CallAmbulance"
        component={CallAmbulance}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
