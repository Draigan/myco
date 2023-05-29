/*************************************
This component takes the json data for a tutorial 
and extracts the location of the images within the text
it then renders the images and text in order they
appear in the json.
*************************************/

import React from "react";
import { useEffect } from "react";
import { Card, Text } from "react-native-paper";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

export const RenderTutorial = ({ navigation, route }) => {
  const [imagesState, setImagesState] = useState([]);
  const [textsState, setTextsState] = useState([]);
  const { name } = route.params;
  const tutorials = useSelector((state) => state.tutorial.value);
  const rootTutorial = tutorials.find((tutorial) => {
    return tutorial.subtutorials.find((item) => item.name === name);
  });

  const tutorial = rootTutorial.subtutorials.find((item) => item.name === name);
  const textdata = tutorial.textdata;

  // [{position: x, uri: ""}]
  let images = [];
  let texts = [];

  //TODO Check to make sure full text is being return in recursion
  function extractImages(text, position, positionTotal, rounds) {
    // console.log(
    //   "ROUND:",
    //   rounds,
    //   "__________________________________________________"
    // );
    // // console.log(textTemp);
    // console.log(images, "\n");
    let textTemp = text.slice(positionTotal);
    // console.log(textTemp);
    let imagePosition = textTemp.search("IMAGE");
    if (!textTemp.includes("IMAGE") || rounds === 6) return;
    let regex = /{(.*?)}/;
    let cutText = textTemp.slice(imagePosition + 5);
    let imagePath = cutText.match(regex)[1];
    positionTotal += imagePosition + imagePath.length + 7;
    images.push({
      positionStart: positionTotal - imagePath.length - 7,
      positionEnd: positionTotal,
      uri: imagePath,
    });
    // cutText = cutText.slice(imagePath.length);
    position = imagePosition + 5 + imagePath.length;
    rounds++;
    return extractImages(text, position, positionTotal, rounds);
  }
  console.log(tutorial.textdata.search("IMAGE"));

  function extractText() {
    let slice;
    let position = 0;
    images.forEach((item, index) => {
      slice = textdata.slice(position, item.positionStart).trim();
      texts.push(slice);
      position = item.positionEnd;
    });
    //console.log(texts);
  }
  useEffect(() => {
    let images = [];
    let texts = [];
    extractImages(tutorial.textdata, 0, 0, 0);
    extractText();
    setImagesState(images);
    setImagesState(images);
  }, []);

  extractImages(tutorial.textdata, 0, 0, 0);
  // position = 0
  // cut text from 0 to the start of the first entry.
  // Insert images
  // cut text from the end of the first entry to the start of the second entry

  return (
    <ScrollView>
      <Text> {tutorial.name}</Text>
      <Card
        onPress={() => {
          images = [];
          extractImages(tutorial.textdata, 0, 0, 0);
          extractText();
          console.log(texts);
          // consoe.log(images);
        }}
      >
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>

      {texts.map((item, index) => {
        return <Text>{item}</Text>;
      })}
    </ScrollView>
  );
};
// <Text> {textdata.slice(0, images[0].positionStart)}</Text>
// <Text>
//   {textdata.slice(images[0].positionEnd, images[1].positionStart)}
// </Text>
// <Text>
//   {textdata.slice(images[1].positionEnd, images[2].positionStart)}
// </Text>
// {textdata.slice(
//   item[index - 1] ? images[0].positionEnd : 0,
//   images[index].positionStart
// )}
