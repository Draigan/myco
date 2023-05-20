import { View, TouchableOpacity, Button, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";

const Tutorials = ({ navigation, route }) => {
  const { tutorials } = route.params;
  return (
    <View>
      <List.AccordionGroup>
        {tutorials.tutorialsData.map((tutorial) => {
          {
            console.log(tutorial);
          }
          return (
            <List.Accordion
              title={`${tutorial.name}`}
              key={`${tutorial.id}`}
              id={`${tutorial.id}`}
            >
              <TouchableOpacity>
                <List.Item title="First Item " />
              </TouchableOpacity>
              <List.Item title="Second Item" />
            </List.Accordion>
          );
        })}
      </List.AccordionGroup>
    </View>
  );
};
// {tutorial.subtutorials.map((subtutorial) => {
//   <List.Item title="First Item " />;
// })}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Tutorials;
