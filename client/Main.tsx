import BottomNav from "./navigation/BottomNav";
import { setTutorial } from "./redux/slices/tutorialSlice";
import { setSubTutorial, test } from "./redux/slices/subTutorialsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Main({ tutorialsData }) {
  const dispatch = useDispatch();

  //
  // Set Tutorials and Sub Tutorials
  //
  useEffect(() => {
    let subTutorials = [];
    tutorialsData.tutorials.forEach((element) => {
      element.subtutorials.forEach((subelement) => {
        subTutorials.push(subelement);
      });
    });
    dispatch(setTutorial(tutorialsData.tutorials));
    dispatch(setSubTutorial({ subTutorials }));
  }, []);

  //
  // Return the bottom navigator, which contains all other screens
  //

  return <BottomNav />;
}
