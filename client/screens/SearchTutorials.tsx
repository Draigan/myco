import React, { useState } from "react";
import { Divider, Text } from "react-native-paper";
import TutorialSearchBar from "../components/TutorialSearch";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { NavigationContext } from "@react-navigation/native";

export default function SearchTutorials({ navigation }) {
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  const subtutorialsSelector = useSelector(
    (state: RootState) => state.subtutorial.value
  );
  const subTutorials = subtutorialsSelector.subTutorials;
  console.log(subTutorials);
  const [filteredTutorial, setFilteredTutorial] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <TutorialSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ScrollView>
        {subTutorials
          .filter((item) =>
            item.name.toUpperCase().includes(searchQuery.toUpperCase())
          )
          .map((tutorial, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(`${tutorial.name}`, {
                      name: `${tutorial.name}`,
                    });
                  }}
                >
                  <Text variant="bodyLarge"> {tutorial.name}</Text>
                </TouchableOpacity>
                <Divider style={styles.divider} />
              </View>
            );
          })}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
  },
});
