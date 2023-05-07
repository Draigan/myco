import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNav } from "./navigation/StackNav";
import BottomNav from "./navigation/BottomNav";
import { Provider as PaperProvider } from "react-native-paper";
import useFetch from "./hooks/useFetch";
import FetchUpdate from "./helpers/FetchUpdate";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  // const { data, error, loading }: any = useFetch(
  //   "http://192.168.2.32:5000/update"
  // );
  FetchUpdate("http://192.168.2.32:5000/update", setLoading);
  if (loading) {
    <View style={styles.container}> LOADING....</View>;
  }
  return (
    <NavigationContainer>
      <PaperProvider>
        <BottomNav />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
