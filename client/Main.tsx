import BottomNav from "./navigation/BottomNav";
import { setTutorial } from "./redux/slices/tutorialSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  TouchableWithoutFeedback,
  DismissKeyboardView,
  View,
  Keyboard,
} from "react-native";
export default function Main({ tutorialsData }) {
  const value = useSelector((state: RootState) => state.tutorial.value);
  const dispatch = useDispatch();
  useEffect(() => {
    // const tutorialsModified = tutorialsData.map((tutorial, index) => {
    //   let subs = JSON.parse(tutorial.subtutorials);
    //   tutorial.subtutorials = subs;
    //
    //   console.log(tutorial.subtutorials[0].name);
    //
    //   return tutorial;
    // });

    // console.log("MODIFIED", tutorialsModified);
    console.log(tutorialsData, "from main");
    dispatch(setTutorial(tutorialsData.tutorials));
  }, []);
  return <BottomNav />;
}
