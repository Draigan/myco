import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Test from "../screens/Test";
import Shop from "../screens/Shop";
import MyGrow from "../screens/MyGrow";
import Tutorials from "../screens/Tutorials";
import SearchTutorials from "../screens/SearchTutorials";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};

function TutorialStackNav() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="TutorialsStackNav"
        options={{
          headerShown: false,
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "gray",
            shadowColor: "transparent",
          },
        }}
        component={Tutorials}
      />
      <Stack.Screen
        name="SearchTutorials"
        options={{
          headerShown: true,
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "#f1f1f1",
            shadowColor: "transparent",
          },
        }}
        component={SearchTutorials}
      />
    </Stack.Navigator>
  );
}
function HomeStackNav() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="HomeStackNav"
        options={{
          headerShown: false,
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "gray",
            shadowColor: "transparent",
          },
        }}
        component={Home}
      />
      <Stack.Screen
        name="dixie"
        options={{
          headerShown: true,
          headerTintColor: "black",
          headerStyle: {
            backgroundColor: "#f1f1f1",
            shadowColor: "transparent",
          },
        }}
        component={Test}
      />
    </Stack.Navigator>
  );
}

export { HomeStackNav, TutorialStackNav };
