import React, { useState } from "react";
import { Text } from "react-native-paper";
import TutorialSearchBar from "../components/TutorialSearch";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";

export default function SearchTutorials() {
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  const [filteredTutorial, setFilteredTutorial] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <TutorialSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ScrollView>
        {tutorials
          .filter((item) =>
            item.name.toUpperCase().includes(searchQuery.toUpperCase())
          )
          .map((tutorial, index) => {
            return (
              <View key={index}>
                <Text> {tutorial.name}</Text>
              </View>
            );
          })}
      </ScrollView>
    </>
  );
}
