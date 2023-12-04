import { View, Text, StyleSheet, Image } from "react-native";
import React, {useEffect} from 'react';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Doctor Appointment Booking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: "#fff",
  },
  title: { color: "#fff", fontSize: 20, fontWeight: "800", marginTop: 20 },
});
