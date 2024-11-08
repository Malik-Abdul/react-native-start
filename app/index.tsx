import { View } from "react-native";

import Greet from "@/components/Greet";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name="AG" />
      <Greet name="Malik" />
    </View>
  );
}
