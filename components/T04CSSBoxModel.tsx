import { Text, View, StyleSheet } from "react-native";

const T04CSSBoxModel = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text>Light Blue Box</Text>
      </View>
      <View style={[styles.lightGreeneBox, styles.box]}>
        <Text>Light Green Box</Text>
      </View>
    </View>
  );
};

export default T04CSSBoxModel;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    // border: "2px solid purple", wiil not work in react native
    // alternate
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 10,
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreeneBox: {
    backgroundColor: "lightgreen",
  },
});
