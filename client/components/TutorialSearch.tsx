import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

const TutorialSearchBar = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={{ width: "100%" }}>
      <Searchbar
        mode="bar"
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default TutorialSearchBar;
