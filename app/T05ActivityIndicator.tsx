import { useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png");

export default function HomeScreen() {
  const [isActivityIndicatorHidden, setIsActivityIndicatorHidden] =
    useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <Button
        title="toggle Activity indicator"
        onPress={() => setIsActivityIndicatorHidden(!isActivityIndicatorHidden)}
      />
      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={isActivityIndicatorHidden}
      />
    </View>
  );
}
