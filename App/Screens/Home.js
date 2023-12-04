import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Header";

export default function Home() {
  return (
    <View>
      <Header
        title={"Doctor Appointment Booking"}
        icon={require("../../assets/images/logo.png")}
      />
    </View>
  );
}
