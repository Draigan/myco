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
import {
  Button,
  Card,
  List,
  Searchbar,
  TouchableRipple,
} from "react-native-paper";
import { useSelector } from "react-redux";
import TutorialSearchBar from "../components/TutorialSearch";
import { globalStyles } from "../styles/global";

const Tutorials = ({ navigation, routes }) => {
  // Ask redux for the tutorials
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  const [searchQuery, setSearchQuery] = useState("");

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
              <View key={Math.random()}>
                <List.Accordion
                  title={`${tutorial.name}`}
                  key={Math.random()}
                  id={`${indexOne}`}
                >
                  {/*  Render Items  */}
                  {tutorial.subtutorials.map((subtutorial, indexTwo) => {
                    return (
                      <TouchableRipple
                        key={Math.random()}
                        onPress={() => {
                          navigation.navigate(`${subtutorial.name}`, {
                            name: `${subtutorial.name}`,
                          });
                        }}
                      >
                        <List.Item title={`${subtutorial.name}`} />
                      </TouchableRipple>
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
