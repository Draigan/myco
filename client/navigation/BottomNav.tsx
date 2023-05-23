import * as React from "react";
import Tutorials from "../screens/Tutorials";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import MyGrow from "../screens/MyGrow";
import Shop from "../screens/Shop";
import HomeDrawerNav from "./HomeDrawerNav";
import Ionicons from "@expo/vector-icons/Ionicons";

import Entypo from "@expo/vector-icons/Entypo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TutorialsDrawerNav from "./TutorialDrawerNav";
import ShopDrawerNav from "./ShopDrawerNav";
const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Change icons here example: route.name === "Home"
            if (route.name) {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeDrawerNav}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tutorials"
          component={TutorialsDrawerNav}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="MyGrow" component={MyGrow} />
        <Tab.Screen name="Shop" component={ShopDrawerNav} />
      </Tab.Navigator>
    </>
  );
}
