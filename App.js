import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/back.png")} />
        <Text style={styles.text}>My Projects</Text>
        <View style={styles.body}>
          <View style={styles.flexcontainer}>
            <View style={styles.box}>
              <Text style={styles.boxText}>HR</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Finance</Text>
            </View>
          </View>
          <View style={styles.flexcontainer}>
            <View style={styles.box}>
              <Text style={styles.boxText}>PM</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>UI/UX</Text>
            </View>
          </View>
          <View style={styles.flexcontainer}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Teaching</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    paddingHorizontal: 20
  },
  image: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "10%",
    height: 30,
    marginHorizontal: 20,
    marginVertical:20,
    resizeMode: "contain"
  },
  body: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
    // marginHorizontal: 10
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 15,
    marginLeft: 20
  },
  flexcontainer: {
    flexDirection: "row",
    marginVertical:10,
    alignItems:"flex-start",
    justifyContent:"space-between"
  },

  box: {
    width: "45%",
    height: 130,
    backgroundColor: "#242132",
    alignItems: "flex-start",
    marginRight: 25,
    // justifyContent:"space-evenly",
    borderRadius: 10,
    elevation: 15
  },
  boxText: {
    marginTop: 70,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    fontSize: 17,
    color: "white"
  }
});
