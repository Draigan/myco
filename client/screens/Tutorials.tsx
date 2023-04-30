import { View, Button, Text, StyleSheet } from "react-native";

const Tutorials = () => {
  return (
    <View style={styles.center}>
      <Text>This is the tutorials screen</Text>
      <Button title="Go to About Screen" />
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

export default Tutorials;
