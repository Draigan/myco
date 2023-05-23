import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNav } from "../navigation/StackNav";
import { Text } from "react-native";
import Tutorials from "../screens/Tutorials";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

export default function HomeDrawerNav({ navigation, route }) {
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomeStackNav"
          options={{ headerShown: true, headerTitle: "" }}
          component={HomeStackNav}
        />
      </Drawer.Navigator>
    </>
  );
}
