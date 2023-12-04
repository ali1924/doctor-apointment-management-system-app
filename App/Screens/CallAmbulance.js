import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Header from "../Components/Header";
import CommonBtn from "../Components/CommonBtn";

const CallAmbulance = () => {
  return (
    <View style={styles.container}>
      <Header
        icon={require("../../assets/images/back.png")}
        title={"Call Ambulance"}
      />
      <TextInput placeholder="Address" style={styles.address} />
      <CommonBtn w={200} h={50} txt={"Call Now"} status={true} />
    </View>
  );
};

export default CallAmbulance;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    height: 50,
    width: "90%",
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: "center",
    paddingLeft: 20,
  },
});
