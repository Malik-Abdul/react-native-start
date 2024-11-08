import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
const logoImage = require("../assets/images/adaptive-icon.png");

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text style={{ color: "red", fontSize: 14 }}>
        Text Component inside View component with padding 20
      </Text>
      <View style={{ width: 300, height: 300, backgroundColor: "lightblue" }}>
        <Text style={{ color: "plum", fontSize: 14 }}>Text component</Text>
      </View>
      <View style={{ width: 300, height: 300, backgroundColor: "lightgreen" }}>
        <Text style={{ fontSize: 14, color: "white" }}>
          <Text style={{ color: "blue", fontSize: 14 }}>Nested</Text> Text
          Component
        </Text>
      </View>
      <View>
        <Text style={{ color: "red", fontSize: 14 }}>Local Image</Text>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
      </View>
      <View>
        <Text style={{ color: "red", fontSize: 14 }}>Network Image</Text>
        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View>
        <ImageBackground
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 300, height: 300 }}
        >
          <Text style={{ color: "red", fontSize: 14 }}>background Image</Text>
        </ImageBackground>
      </View>
      <View style={{ width: 300 }}>
        <Text>Button</Text>
        <Button
          title="Press"
          onPress={() => console.log("Button press")}
          color="midnightblue"
          disabled={true}
        />
      </View>
    </View>
  );
}
