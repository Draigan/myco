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
  dropTableJSON,
  createTableJSON,
  insertIntoJSON,
  selectFromJSON,
} from "../SQL/SqlUpdate";

const ipLocal = "http://192.168.2.32:5000";

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
    (async function () {
      try {
        const dropConfig = await dropTableConfig();
        const dropJSON = await dropTableJSON();
        const createJSON = await createTableJSON();
        const createConfig = await createTableConfig();
        const insertConfig = await insertIntoConfig();
        const currentVersion = await selectFromConfig();
        const compare = await compareVersions(currentVersion);

        if (compare !== true) return console.log("No update required");

        const data = await axios.get(`${ipLocal}/update`);
        const insertJSON = await insertIntoJSON(data.data);
        const selectJSON = await selectFromJSON();
        const JSONparsed = await JSON.parse(selectJSON[0].data);
        setTutorials(JSONparsed);
        setLoading(false);
        console.log(JSONparsed.version);
      } catch (error) {
        console.error(error, "There was an error during update");
      }
    })();
  }, []);

  return { loading, tutorials, setTutorials };
}
