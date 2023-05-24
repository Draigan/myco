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
    dispatch(setTutorial(tutorialsData));
  }, []);
  return <BottomNav tutorialsData={tutorialsData} />;
}
