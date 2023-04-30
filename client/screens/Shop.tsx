import { View, Button, Text, StyleSheet } from "react-native";

const Shop = () => {
  return (
    <View style={styles.center}>
      <Text>This is the shop screen</Text>
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

export default Shop;
