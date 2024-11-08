import { useState } from "react";
import { View, Text, Button, ActivityIndicator, Alert } from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png");

export default function HomeScreen() {
  const [isActivityIndicatorHidden, setIsActivityIndicatorHidden] =
    useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data", "DOB incorrect")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB incorrect", [
            { text: "cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "ok", onPress: () => console.log("Ok Pressed") },
          ])
        }
      />
    </View>
  );
}
