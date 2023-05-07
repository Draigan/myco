import { useEffect, useState } from "react";
import axios from "axios";
import {
  dropTableTutorials,
  selectFromTutorials,
  insertIntoTutorials,
  createTableTutorials,
  dropTableConfig,
  selectFromConfig,
  insertIntoConfig,
  createTableConfig,
} from "./SqlUpdate";

function compareVersions(currentVersion) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://192.168.2.32:5000/version")
      .then((response) => {
        if (!response) reject("serverfail");
        let serverVersion = response.data.version;
        console.log(currentVersion, "currentversion");
        console.log(serverVersion, "serverVersion");
        if (serverVersion > currentVersion) {
          return resolve(true);
        } else {
          return reject("Everything is up to date");
        }
      })
      .catch((error) => reject(error));
  });
}
export default function FetchUpdate(url: string, setLoading) {
  console.log("Fetching Updates");
  dropTableConfig()
    .then(() => {
      return createTableConfig();
    })
    .then(() => {
      return insertIntoConfig();
    })
    .then(() => {
      return selectFromConfig();
    })
    .then((currentVersion) => {
      return compareVersions(currentVersion);
    })
    .then(() => {
      return dropTableTutorials();
    })
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
      if (err) console.error(err);
    })
    .finally(() => setLoading(false));
}
