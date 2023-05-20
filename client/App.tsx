import { StyleSheet, Text, View, TextInput } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNav } from "./navigation/StackNav";
import BottomNav from "./navigation/BottomNav";
import {
  Provider as PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import useFetch from "./hooks/useFetch";
import FetchUpdate from "./helpers/FetchUpdate";
import { useEffect, useState } from "react";
import { selectFromTutorials } from "./helpers/SqlUpdate";
export function App() {
  const { loading, tutorials, setTutorials } = FetchUpdate();
  // selectFromTutorials().then((response: any) => {
  //   setTutorials(response);
  // });
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} color={"green"} size={"large"} />
        <Text>Updating Tutorials...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <PaperProvider>
        <BottomNav tutorialsData={tutorials} />
      </PaperProvider>
    </NavigationContainer>
  );
}
registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
