import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Test from "../screens/Test";
import Shop from "../screens/Shop";
import MyGrow from "../screens/MyGrow";
import Tutorials from "../screens/Tutorials";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};

function HomeStackNav(tutorialsData) {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="TestTwo" component={Home} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}

export { HomeStackNav };
