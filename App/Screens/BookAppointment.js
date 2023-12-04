import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Header";

export default function BookAppointment() {
  return (
    <View style={styles.container}>
      <Header
        icon={require("../../assets/images/back.png")}
        title={"Book Appointment"}
      />
      <Image
        source={require("../../assets/images/doctor.png")}
        style={styles.docImage}
      />
      <Text style={styles.docName}>Samia Nasir Nira</Text>
      <Text style={styles.docSpecialist}>Cardiologist</Text>
      <Text style={styles.heading}>Available Slot</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  docImage: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: "center",
  },
  docName: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
  },

  docSpecialist: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#f2f2f2",
    color: "green",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
  },
});
