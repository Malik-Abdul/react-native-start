import { View, Text, StyleSheet, Dimensions } from "react-native";
const T06Dimensions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
};

export default T06Dimensions;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: "70%",
    width: windowWidth > 500 ? "70%" : "90%",
    // height: "40%",
    height: windowHeight > 600 ? "60%" : "90%",

    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: windowWidth > 500 ? 50 : 25 },
});

//  "orientation": "default", in app.json
