import { View, Text, StyleSheet } from "react-native";
const T05FlexBox = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: any;
}) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={[styles.text]}>{children}</Text>
    </View>
  );
};

export default T05FlexBox;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
