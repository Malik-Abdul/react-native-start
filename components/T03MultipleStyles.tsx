import { Text, View, StyleSheet } from "react-native";

const T03MultipleStyles = () => {
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

export default T03MultipleStyles;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: "pink", // Will not applicable because last style in the array takes precedence, in case lightBlueBox but will be applicable in case of lightGreeneBox
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreeneBox: {
    backgroundColor: "lightgreen",
  },
});
