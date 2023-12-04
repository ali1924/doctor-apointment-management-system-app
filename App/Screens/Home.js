import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../Components/Header";

// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
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

      {/* Option */}
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={[1, 1, 1, 1, 1, 1]}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <LinearGradient
                  colors={["#24c6dc", "#514a9d"]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.catName}>Category {index + 1}</Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Top rated doctor */}
      <Text style={styles.heading}>Top rated Doctor</Text>
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
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 18,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  catName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  heading: {},
});
