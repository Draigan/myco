import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNav } from "../navigation/StackNav";
import { Text } from "react-native";
import Tutorials from "../screens/Tutorials";

const Drawer = createDrawerNavigator();

export default function HomeDrawer({ navigation, route }) {
  const { tutorials } = route.params;
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStackNav" component={HomeStackNav} />
        {tutorials.tutorialsData.map((tutorial) => {
          return (
            <Drawer.Screen
              name={`${tutorial.name}`}
              key={`${tutorial.key}`}
              component={HomeStackNav}
            />
          );
        })}
      </Drawer.Navigator>
    </>
  );
}

// {tutorialsData.map(() => {
//   return <Drawer.Screen name="Tutorials" component={Tutorials} />;
// })}
