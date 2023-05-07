import { useEffect, useState } from "react";
import axios from "axios";
import SqlUpdate from "./SqlUpdate";

export default function FetchUpdate(url: string) {
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // setData(response.data);
        //
        SqlUpdate(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});
  }, []);
}
