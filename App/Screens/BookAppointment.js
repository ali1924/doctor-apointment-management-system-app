import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import CommonBtn from "../Components/CommonBtn";
import { ScrollView } from "react-native";

export default function BookAppointment() {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [selectedGender, setSelectedGender] = useState("male");
  return (
    <ScrollView style={styles.container}>
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

        {/* Available Slot */}
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
                      backgroundColor:
                        selectedSlot === index ? "green" : "white",
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
        {/* Patient Name */}
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput style={styles.nameInput} />
        <Text style={styles.heading}>Select Gender</Text>

        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender === "male" ? "green" : "black",
                borderWidth: selectedGender === "male" ? 2 : 1,
              },
            ]}
            onPress={() => {
              setSelectedGender("male");
            }}
          >
            <Image
              source={require("../../assets/images/male.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender === "female" ? "green" : "black",
                borderWidth: selectedGender === "female" ? 2 : 0.5,
              },
            ]}
            onPress={() => {
              setSelectedGender("female");
            }}
          >
            <Image
              source={require("../../assets/images/female.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <CommonBtn w={300} h={45} txt={"Book Now"} status={true} />
        </View>
      </View>
    </ScrollView>
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
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: "94%",
    height: 45,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btnView: { marginTop: 20, marginBottom: 20 },
});
