import { View, Button, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const Home = ({ navigation }: any, tutorialsData) => {
  return (
    <View style={styles.center}>
      <Text> {tutorialsData.name}</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("Test")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Home;
