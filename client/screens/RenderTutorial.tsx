import RNJsxParser from "react-native-jsx-parser";
import React from "react";
import { useEffect, useState } from "react";
import { Card, Text } from "react-native-paper";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import { StyleSheet } from "react-native";

export const RenderTutorial = ({ navigation, route }) => {
  const { name } = route.params;
  const tutorials = useSelector((state: RootState) => state.tutorial.value);
  const rootTutorial = tutorials.find((tutorial) => {
    return tutorial.subtutorials.find((item) => item.name === name);
  });

  const tutorial = rootTutorial.subtutorials.find((item) => item.name === name);
  const textdata = tutorial.textdata;

  const postComponents = { Text, Card };
  return (
    <ScrollView>
      <View style={styles.container}>
        <RNJsxParser components={postComponents} jsx={textdata} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
