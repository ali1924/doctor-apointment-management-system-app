import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

export default function BookAppointment() {
  const [selectedSlot, setSelectedSlot] = useState("");
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

      <View>
        <FlatList
          numColumns={2}
          data={[
            "08:00AM-10:00AM",
            "10:00AM-12:00 PM",
            "12:00PM-02:00PM",
            "02:00PM-4:00PM",
            "04:00PM-6:00PM",
            "06:00PM-8:00PM",
          ]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={[
                  styles.timeSlot,
                  {
                    borderColor: selectedSlot === index ? "green" : "black",
                    backgroundColor: selectedSlot === index ? "green" : "white",
                  },
                ]}
                onPress={() => {
                  setSelectedSlot(index);
                }}
              >
                <Text
                  style={{
                    color: selectedSlot === index ? "white" : "black",
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
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
  timeSlot: {
    width: "40%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    // backgroundColor:'',
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
