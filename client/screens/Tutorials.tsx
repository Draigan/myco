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
import { Button, Card, List, Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";
import TutorialSearchBar from "../components/TutorialSearch";
import { globalStyles } from "../styles/global";

const Tutorials = ({ navigation, routes }) => {
  // Ask redux for the tutorials
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  const [filteredTutorial, setFilteredTutorial] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(tutorials, "FROM tuts");
  console.log(typeof tutorials);
  console.log(tutorials);

  return (
    <>
      <Button
        icon="search-web"
        mode="contained"
        onPress={() => {
          navigation.navigate("SearchTutorials");
        }}
      >
        Search
      </Button>
      <ScrollView>
        <List.AccordionGroup>
          {/*  Render Category  */}
          {tutorials.map((tutorial, indexOne) => {
            return (
              <View key={indexOne}>
                <List.Accordion title={`${tutorial.name}`} id={`${indexOne}`}>
                  {/*  Render Items  */}
                  {tutorial.subtutorials.map((subtutorial, indexTwo) => {
                    return (
                      <List.Item
                        key={Number("indexOne" + "indexTwo")}
                        title={`${subtutorial.name}`}
                      />
                    );
                  })}
                </List.Accordion>
              </View>
            );
          })}
        </List.AccordionGroup>
      </ScrollView>
    </>
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
