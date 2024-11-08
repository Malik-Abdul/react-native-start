import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
} from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png");

export default function HomeScreen() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="toggle statusBar"
        onPress={() => setIsStatusBarHidden(!isStatusBarHidden)}
      />
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={isStatusBarHidden}
      />
    </View>
  );
}
