import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import CommonBtn from "../Components/CommonBtn";
import { ScrollView } from "react-native";
let DayList = [];

export default function BookAppointment({ navigation }) {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState("male");
  const [selectedDay, setSelectedDay] = useState(-1);
  const [slots, setSlots] = useState([
    { sloT: "10:00-12:00PM", selected: false },
    { sloT: "12:00-02:00PM", selected: false },
    { sloT: "02:00-04:00PM", selected: false },
    { sloT: "04:00-06:00PM", selected: false },
    { sloT: "06:00-08:00PM", selected: false },
    { sloT: "08:00-11:00PM", selected: false },
  ]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({ day: i, selected: false });
    }
    setDays(DaysList);
  }, []);
  const getDays = (month) => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };
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

        {/* Selected Date */}
        <Text style={styles.heading}>Selected Date</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={({ item, index }) => index}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 70,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: selectedDay == index ? "blue" : "white",
                    borderWidth: selectedDay == index ? 0 : 1,
                    marginLeft: 10,
                  }}
                  onPress={() => {
                    if (item.day < new Date().getDate()) {
                    } else {
                      setSelectedDay(index);
                    }
                  }}
                >
                  <Text
                    style={{ color: selectedDay == index ? "#fff" : "blue" }}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Available Slot */}
        <Text style={styles.heading}>Available Schedule</Text>
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
          <CommonBtn
            w={300}
            h={45}
            txt={"Book Now"}
            status={true}
            onClick={() => {
              navigation.navigate("Success");
            }}
          />
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
  singleDay: {
    width: 60,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F2667",
    marginLeft: 10,
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
  bottomView: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    backgroundColor: "blue",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
});
