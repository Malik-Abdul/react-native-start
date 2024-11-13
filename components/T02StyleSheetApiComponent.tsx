import { Text, View, StyleSheet } from "react-native";

const T02StyleSheetApiComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheetApiComponent</Text>
    </View>
  );
};

export default T02StyleSheetApiComponent;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "lightblue", padding: 60 },
  title: { color: "red" },
});
