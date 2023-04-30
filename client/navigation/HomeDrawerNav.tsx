import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNav } from "../navigation/StackNav";
import Tutorials from "../screens/Tutorials";

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStackNav" component={HomeStackNav} />
      <Drawer.Screen name="Tutorials" component={Tutorials} />
    </Drawer.Navigator>
  );
}
