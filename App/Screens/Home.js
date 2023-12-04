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
import CommonBtn from "../Components/CommonBtn";
export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
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
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <FlatList
            numColumns={2}
            data={[1, 1, 1, 1, 1, 1]}
            //   horizontal
            renderItem={({ item, index }) => {
              return (
                <View style={styles.docItem}>
                  {/* <Text>Mohammad Ali</Text> */}
                  <Image
                    source={require("../../assets/images/doctor.png")}
                    style={styles.docImage}
                  />
                  <Text style={styles.docName}>Doctor {index + 1}</Text>
                  <Text style={styles.docSpecialist}>Cardiologist</Text>
                  <Text
                    style={[
                      styles.docStatus,
                      {
                        color: index / 2 === 0 ? "green" : "red",
                        opacity: index / 2 === 0 ? 1 : 0.5,
                      },
                    ]}
                  >
                    {index / 2 === 0 ? "Available" : "Busy"}
                  </Text>
                  {/* Button */}
                  <CommonBtn
                    w={150}
                    h={40}
                    txt={"Book Appointment"}
                    status={index / 2 === 0 ? true : false}
                    onClick={()=>{
                        if(index/2===0){
                            navigation.navigate('BookAppointment')
                        }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    banner: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 10,
    },
    heading: {
      color: '#000',
      fontSize: 18,
      fontWeight: '700',
      marginTop: 15,
      marginLeft: 15,
    },
    linearGradient: {
      width: 120,
      height: 80,
      borderRadius: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    catName: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
    },
    docItem: {
      width: '45%',
  
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 0.2,
      margin: 10,
    },
    docImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignSelf: 'center',
      marginTop: 20,
    },
    docName: {
      fontSize: 18,
      fontWeight: '700',
      alignSelf: 'center',
      marginTop: 10,
    },
    docSpecialist: {
      fontSize: 14,
      marginTop: 5,
      fontWeight: '600',
      alignSelf: 'center',
      color: 'green',
      backgroundColor: '#f2f2f2',
      padding: 5,
      borderRadius: 10,
    },
    docStatus: {
      fontSize: 14,
      marginTop: 5,
      fontWeight: '600',
      alignSelf: 'center',
    },
    bottomView: {
      width: '90%',
      height: 60,
      borderRadius: 10,
      elevation: 5,
      position: 'absolute',
      bottom: 20,
      backgroundColor: '#fff',
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    bottomIcon: {
      width: 30,
      height: 30,
    },
  });
  
