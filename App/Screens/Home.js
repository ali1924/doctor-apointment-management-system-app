import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "../Components/Header";

export default function Home() {
  return (
    <View>
      <Header
        title={"Doctor Appointment Booking"}
        icon={require("../../assets/images/logo.png")}
      />

      <Image
        source={require("../../assets/images/banner.jpg")}
        style={styles.banner}
      />

      <Text style={styles.heading}>Select Category</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 15,
  },
});
