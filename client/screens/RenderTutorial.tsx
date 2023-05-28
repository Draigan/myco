import React from "react";
import { Card, Text } from "react-native-paper";
import { View } from "react-native";
import { useSelector } from "react-redux";

export const RenderTutorial = ({ navigation, route }) => {
  const { name } = route.params;
  const tutorials = useSelector((state) => state.tutorial.value);
  const rootTutorial = tutorials.find((tutorial) => {
    return tutorial.subtutorials.find((item) => item.name === name);
  });

  const tutorial = rootTutorial.subtutorials.find((item) => item.name === name);

  // [{position: x, uri: ""}]
  let images = [];

  function findImagePositions(text, position, positionTotal, rounds) {
    console.log(images, "\n");
    let textTemp = text.slice(position);
    let imagePosition = textTemp.search("IMAGE");
    if (imagePosition === -1 || rounds === 5) return;
    positionTotal += imagePosition;
    let regex = /{(.*?)}/;
    let cutText = textTemp.slice(imagePosition + 5);
    let imagePath = cutText.match(regex)[1];
    images.push({
      positionStart: positionTotal,
      positionEnd: positionTotal + imagePath.length,
      uri: imagePath,
    });
    // cutText = cutText.slice(imagePath.length);
    position = imagePosition + 5 + imagePath.length;
    rounds++;
    return findImagePositions(text, position, positionTotal, rounds);
  }
  console.log(tutorial.textdata.search("dixie"));

  // let regex = /{(.*?)}/;
  // let cutText = tutorial.textdata.slice(tutorial.textdata.search("IMAGE") + 5);
  // let test = cutText.match(regex)[1];
  // let urlStartIndex = tutorial.textdata.search("IMAGE") + 5;
  // let urlEndIndex = cutText.search("");
  // console.log(urlEndIndex);
  // console.log(cutText, "CUTTEXT");
  // console.log(tutorial.textdata.slice(urlStartIndex, urlEndIndex));
  // console.log(test);
  return (
    <View>
      <Text> {tutorial.name}</Text>
      <Card
        onPress={() => {
          images = [];
          findImagePositions(tutorial.textdata, 0, 0, 0);
        }}
      >
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
      <Text> {tutorial.textdata}</Text>
    </View>
  );
};
