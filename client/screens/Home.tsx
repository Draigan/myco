import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackActions } from "@react-navigation/native";
import Test from "./Test";

const Home = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={styles.center}>
        {/* Logos */}
        <Text variant="headlineLarge">Myco Deity</Text>
        <Text variant="headlineSmall">Mycologists Tool</Text>
        {/* Hero */}
        <Card style={homeStyles.card}>
          <Card.Cover source={require("../assets/monotub1.jpg")} />
          <Card.Title title="What we do" />
          <Card.Content>
            <Text>
              Myco Deity is your handy mycology assistant. It is designed to be
              a reference for all mycology enthusiests and to provide a guided
              experience for the grow kits that I create.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button
              icon="rocket"
              mode="outlined"
              onPress={() => navigation.navigate("dixie")}
            >
              Learn More...
            </Button>
          </Card.Actions>
        </Card>
        {/* Just Baught A Grow Kit */}
        <Card style={homeStyles.card}>
          <Card.Title title="Have you just baught a grow kit?" />
          <Card.Content>
            <Text>I have created a guided experience for my grow kits.</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              icon="mushroom"
              mode="contained"
              onPress={() => navigation.navigate("MyGrow")}
            >
              Start new grow
            </Button>
          </Card.Actions>
        </Card>
        {/* Support Us */}
        <Card style={homeStyles.card}>
          <Card.Title title="Support Myco Deity" />
          <Card.Content>
            <Text>
              Myco Deity is a one man band and I am just starting out. Please
              consider buying one of my grow kits, or other items from the shop.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button
              icon="store"
              mode="contained"
              onPress={() => navigation.navigate("Shop")}
            >
              Buy grow kits
            </Button>
            <Button
              icon="coffee"
              mode="outlined"
              onPress={() => navigation.navigate("Shop")}
            >
              Buy me a coffee
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};
const basicFontSize = 16;

const homeStyles = StyleSheet.create({
  button: {
    width: "30%",
  },
  buttonsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 10,
  },
  flexItem: {},
  card: {
    width: "100%",
  },
});

const styles = StyleSheet.create({
  center: {
    marginTop: 10,
    flex: 1,
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  h1: {
    fontWeight: "bold",
    fontSize: basicFontSize * 2.5,
  },
  h2: {
    fontWeight: "normal",
    fontSize: basicFontSize * 1.5,
  },
  normalText: {
    fontSize: basicFontSize,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  mainImage: { resizeMode: "contain", width: 400, height: 200 },
});

export default Home;
