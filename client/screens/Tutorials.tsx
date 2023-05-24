import { useState } from "react";
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard,
} from "react-native";
import { Button, Card, List } from "react-native-paper";
import { useSelector } from "react-redux";
import TutorialSearchBar from "../components/TutorialSearch";
import { globalStyles } from "../styles/global";
const Tutorials = () => {
  // Ask redux for the tutorials
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  const [filteredTutorial, setFilteredTutorial] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScrollView>
      <TutorialSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {tutorials
        .filter((item) =>
          item.name.toUpperCase().includes(searchQuery.toUpperCase())
        )
        .map((tutorial) => {
          return (
            <View key={tutorial.id}>
              <Text> {tutorial.name}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Tutorials;
