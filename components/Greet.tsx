import { View, Text } from "react-native";

const Greet = ({ name }: { name: string }) => {
  return (
    <View>
      <Text>Hi, {name}</Text>
    </View>
  );
};

export default Greet;
