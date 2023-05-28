import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Test from "../screens/Test";
import Shop from "../screens/Shop";
import MyGrow from "../screens/MyGrow";
import Tutorials from "../screens/Tutorials";
import SearchTutorials from "../screens/SearchTutorials";
import { useSelector } from "react-redux";
import { RenderTutorial } from "../screens/RenderTutorial";

const Stack = createStackNavigator();

function TutorialStackNav() {
  const tutorials = useSelector((state) => state.tutorial.value);
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
      {tutorials.map((tutorial) => {
        return tutorial.subtutorials.map((subtutorial, index) => {
          console.log(subtutorial.name, "FROM SUB TUTS");
          return (
            <Stack.Screen
              key={Math.random()}
              name={`${subtutorial.name}`}
              options={{
                headerShown: true,
                headerTintColor: "black",
                headerStyle: {
                  backgroundColor: "#9AC4F8",
                  shadowColor: "transparent",
                },
              }}
              component={RenderTutorial}
            />
          );
        });
      })}
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

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false,
};

export { HomeStackNav, TutorialStackNav };
