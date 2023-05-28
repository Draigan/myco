import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNav, TutorialStackNav } from "../navigation/StackNav";
import { Text } from "react-native";
import Tutorials from "../screens/Tutorials";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import Test from "../screens/Test";

const Drawer = createDrawerNavigator();

export default function TutorialsDrawerNav({ navigation, route }) {
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="TutorialsDrawerNav" component={TutorialStackNav} />
        {tutorials.map((tutorial) => {
          return (
            <Drawer.Screen
              name={`${tutorial.name}`}
              key={`${tutorial.key}`}
              component={Tutorials}
            />
          );
        })}
      </Drawer.Navigator>
    </>
  );
}
