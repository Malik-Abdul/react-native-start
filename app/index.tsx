import { StyleSheet, Text, View } from "react-native";

import Greet from "@/components/Greet";
import T02StyleSheetApiComponent from "@/components/T02StyleSheetApiComponent";
import T03MultipleStyles from "@/components/T03MultipleStyles";
import T04CSSBoxModel from "@/components/T04CSSBoxModel";
import T06Dimensions from "@/components/T06Dimensions";
// import T05FlexBox from "@/components/T05FlexBox";

export default function HomeScreen() {
  return (
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   {/* <T02StyleSheetApiComponent /> */}
    //   {/* <T03MultipleStyles /> */}
    //   {/* <T04CSSBoxModel /> */}
    // </View>

    // In react native the View Component is automatically set to display: flex
    // <View style={styles.container}>
    //   <T05FlexBox style={{ backgroundColor: "#8e9b00" }}>Box 1</T05FlexBox>
    //   <T05FlexBox style={{ backgroundColor: "#b65d1f" }}>Box 2</T05FlexBox>
    //   <T05FlexBox style={{ backgroundColor: "#1c4c56" }}>Box 3</T05FlexBox>
    //   <T05FlexBox style={{ backgroundColor: "#ab9146" }}>Box 4</T05FlexBox>
    //   <T05FlexBox style={{ backgroundColor: "#6b0803" }}>Box 5</T05FlexBox>
    //   <T05FlexBox style={{ backgroundColor: "#1c4c56" }}>Box 6</T05FlexBox>
    //   <T05FlexBox style={{ backgroundColor: "#b95f21" }}>Box 7</T05FlexBox>
    // container: { marginTop: 63, borderWidth: 6, borderColor: "red" },
    //
    // </View>
    <View style={styles.container}>
      <T06Dimensions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
