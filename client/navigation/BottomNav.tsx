import { Platform, View } from "react-native";
import MyGrow from "../screens/MyGrow";
import HomeDrawerNav from "./HomeDrawerNav";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TutorialsDrawerNav from "./TutorialDrawerNav";
import ShopDrawerNav from "./ShopDrawerNav";
const Tab = createBottomTabNavigator();
export default function BottomNav() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: Platform.OS !== "ios",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // Change icons here example: route.name === "Home"
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
              color = focused ? "pink" : "gray";
            } else if (route.name === "Tutorials") {
              iconName = focused ? "ios-book" : "ios-book-outline";
              color = focused ? "#6146A5" : "gray";
            } else if (route.name === "MyGrow") {
              iconName = focused ? "ios-earth" : "ios-earth-outline";
              color = focused ? "green" : "gray";
            } else if (route.name === "Shop") {
              iconName = focused ? "ios-cart" : "ios-cart-outline";
              color = focused ? "teal" : "gray";
            } else if (route.name === "Shop") {
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6146A5",
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
    </View>
  );
}
