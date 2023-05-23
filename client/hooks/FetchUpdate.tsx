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
} from "../SQL/SqlUpdate";

const ipLocal = "http://192.168.2.90:5000";

export default function FetchUpdate() {
  const [loading, setLoading] = useState(true);
  const [tutorials, setTutorials] = useState(true);

  // Check if the version is up to date
  function compareVersions(currentVersion) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ipLocal}/version`)
        .then((response) => {
          if (!response) reject("serverfail");
          let serverVersion = response.data.version;
          console.log(currentVersion, "currentversion");
          console.log(serverVersion, "serverVersion");
          if (serverVersion > currentVersion) {
            return resolve(true);
          } else {
            console.log("Everything is up to date");
            return reject();
          }
        })
        .catch((error) => reject(error));
    });
  }
  useEffect(() => {
    console.log("Fetching Updates");
    dropTableConfig().then(() => {
      return createTableConfig();
    });
    createTableConfig()
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
        return axios.get(`${ipLocal}/update`);
      })
      .then((response) => {
        return insertIntoTutorials(response.data);
      })
      .then(() => {
        return selectFromTutorials();
      })
      .then((response: any) => {
        setTutorials(response);
        console.log(tutorials);
      })
      .catch((err) => {
        if (err) console.error(err);
        selectFromTutorials().then((response: any) => {
          setTutorials(response);
        });
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 0);
      });
  }, []);

  return { loading, tutorials, setTutorials };
}
