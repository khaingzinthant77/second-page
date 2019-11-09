import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image style={styles.image} source={require("./assets/back.png")} />
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>My Projects</Text>
            <View style={styles.first}>
              <View style={styles.box1}>
                <Text style={styles.boxText1}>HR</Text>
              </View>
              <View style={styles.box2}>
              <Text style={styles.boxText2}>Finance</Text>
              </View>
            </View>
            <View style={styles.second}>
              <View style={styles.box1}>
              <Text style={styles.boxText1}>PM</Text>
              </View>
              <View style={styles.box2}>
              <Text style={styles.boxText2}>UI/UX</Text>
              </View>
            </View>
            <View style={styles.third}>
            <View style={styles.box1}>
            <Text style={styles.boxText1}>Teaching</Text>
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
    flexDirection: "column"
  },
  image: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "10%",
    height: 30,
    marginHorizontal: 20,
    marginTop: 50,
    resizeMode: "contain"
  },
  body: {
    flex: 4,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight:"bold",
    marginBottom:10
  },
  first: {
    flex: 1,
    // backgroundColor:"yellow",
    width: "100%",
    flexDirection: "row",
  },
  second: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  third: {
    flex: 1,
    width: "100%",
    flexDirection: "row",  
  },
  box1: {
    width: "47%",
    height: 150,
    backgroundColor: "#242132",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginRight: 20,
    borderRadius: 10,
    elevation:15,
    
  },
  box2: {
    width: "47%",
    height: 150,
    backgroundColor: "#242132",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 10,
    elevation:15
  },
  boxText1:{
    marginTop:100,
    alignSelf:"flex-start",
    paddingHorizontal:20,
    fontSize:17,
    color:"white"
  },
  boxText2:{
    marginTop:70,
    alignSelf:"flex-start",
    paddingHorizontal:20,
    fontSize:17,
    color:"white",
    
  }
});
