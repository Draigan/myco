import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import {
  Provider as PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import useUpdate from "./hooks/useUpdate";
import Main from "./Main";
import { store } from "./redux/store/store";

export function App() {
  const { loading, tutorials, setTutorials } = useUpdate();

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
