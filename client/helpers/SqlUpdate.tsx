import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

const db = SQLite.openDatabase("example.db");
let tutorials = [];

export async function SqlUpdate(update: any) {
  db.transaction((tx) => {
    tx.executeSql("DROP TABLE tutorials");
    // tx.executeSql("DROP config tutorials");
  });

  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS tutorials (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, textdata TEXT)"
    );
  });

  // db.transaction((tx) => {
  //   tx.executeSql("CREATE TABLE IF NOT EXISTS config (id INTEGER)");
  //   tx.executeSql("INSERT INTO config VALUES (0)");
  // });

  db.transaction((tx) => {
    update.tutorials.forEach((tutorial) => {
      tx.executeSql("INSERT INTO tutorials (name, textdata) VALUES(?,?)", [
        tutorial.name,
        tutorial.textdata,
      ]);
    });
  });

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM tutorials",
      null,
      (txObj, resultSet) => {
        tutorials = resultSet.rows._array;
      },
      (txObj, error) => console.log(error)
    );
  });
  console.log(tutorials, "sql");
}

// export function SqlCheckConfig(version) {
//   return new Promise((resolve) => {
//     let config = [];
//     db.transaction((tx) => {
//       tx.executeSql("DROP TABLE config");
//       tx.executeSql("CREATE TABLE IF NOT EXISTS config (id INTEGER)");
//       tx.executeSql("INSERT INTO config VALUES (0)");
//     });
//     db.transaction((tx) => {
//       tx.executeSql(
//         "SELECT * FROM config",
//         null,
//         (txObj, resultSet) => {
//           config = resultSet.rows._array;
//         },
//         (txObj, error) => console.log(error)
//       );
//     });

//     if (version < config) {
//       resolve(true);
//     } else {
//       resolve(false);
//     }
//   });
// }

export default { SqlUpdate };
