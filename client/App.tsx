import { StyleSheet, Keyboard, Text, View, TextInput } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNav } from "./navigation/StackNav";
import BottomNav from "./navigation/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { setTutorial } from "./redux/slices/tutorialSlice";
import { Provider } from "react-redux";
import {
  Provider as PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import useFetch from "./hooks/useFetch";
import FetchUpdate from "./hooks/FetchUpdate";
import { useEffect, useState } from "react";
import { selectFromTutorials } from "./SQL/SqlUpdate";
import Main from "./Main";
import { store } from "./redux/store/store";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export function App() {
  const { loading, tutorials, setTutorials } = FetchUpdate();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} color={"green"} size={"large"} />
        <Text>Updating Tutorials...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Main tutorialsData={tutorials} />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
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
