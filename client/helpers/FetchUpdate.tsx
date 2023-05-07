import { useEffect, useState } from "react";
import axios from "axios";
import {
  dropTable,
  selectFromTutorials,
  insertIntoTutorials,
  createTableTutorials,
} from "./SqlUpdate";

export default function FetchUpdate(url: string) {
  dropTable()
    .then(() => {
      console.log("fromCreate");
      return createTableTutorials();
    })
    .then(() => {
      return axios.get(url);
    })
    .then((response) => {
      return insertIntoTutorials(response.data);
    })
    .then(() => {
      return selectFromTutorials();
    })
    .then((tutorials) => {
      console.log(tutorials);
    })
    .catch((err) => {
      console.log(err);
    });
}

//export default function FetchUpdate(url: string) {
//  useEffect(() => {
//    axios
//      .get(url)
//      .then((response) => {
//        // setData(response.data);
//        //
//        SqlUpdate(response.data);
//      })
//      .catch((err) => {
//        console.error(err);
//      })
//      .finally(() => {});
//  }, []);
//}
