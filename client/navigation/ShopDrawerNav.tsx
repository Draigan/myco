import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNav } from "../navigation/StackNav";
import { Text } from "react-native";
import Tutorials from "../screens/Tutorials";
import { useSelector } from "react-redux";
import Shop from "../screens/Shop";

const Drawer = createDrawerNavigator();

export default function ShopDrawerNav({ navigation, route }) {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Shop Stuff" component={Shop} />
      </Drawer.Navigator>
    </>
  );
}
