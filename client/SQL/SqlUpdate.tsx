import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

const db = SQLite.openDatabase("example.db");
let tutorials = [];

export function dropTableTutorials() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS tutorials",
        null,
        (tx, results) => {
          return resolve();
        },
        (): any => {
          reject("dropTableTutorials Failed");
        }
      );
    });
  });
}
export function dropTableJSON() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS json",
        null,
        (tx, results) => {
          return resolve();
        },
        (): any => {
          reject("dropTableJSON Failed");
        }
      );
    });
  });
}
export function dropTableConfig() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS config",
        null,
        (tx, results) => {
          return resolve();
        },
        (): any => {
          reject("dropTableConfig Failed");
        }
      );
    });
  });
}
export function createTableConfig() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS config (id INTEGER PRIMARY KEY AUTOINCREMENT, version INTEGER)",
        null,
        () => {
          return resolve();
        },
        (): any => {
          return reject("createTableConfig Failed");
        }
      );
    });
  });
}
export function createTableJSON() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS json (data VARCHAR)",
        null,
        () => {
          return resolve();
        },
        (): any => {
          return reject("createTableJSON Failed");
        }
      );
    });
  });
}

export function createTableTutorials() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tutorials (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, textdata TEXT, subtutorials TEXT)",
        null,
        () => {
          return resolve();
        },
        (): any => reject("createTableTutorials Failed")
      );
    });
  });
}
export function insertIntoTutorials(update) {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      update.tutorials.forEach((tutorial) => {
        //let subtutorials = JSON.stringify(tutorial.subtutorials);
        tx.executeSql(
          "INSERT INTO tutorials (name, textdata, subtutorials) VALUES(?,?,?)",
          [
            tutorial.name,
            tutorial.textdata,
            JSON.stringify(tutorial.subtutorials),
          ],
          () => {
            return resolve(update);
          },

          (): any => reject("insertIntoTutorials Failed")
        );
      });
    });
  });
}
export function insertIntoJSON(update) {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO json (data) VALUES (?)",
        [JSON.stringify(update)],
        () => {
          return resolve();
        },
        (): any => reject("insertIntoJSON Failed")
      );
    });
  });
}

export function insertIntoConfig() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO config (version) VALUES (1)",
        null,
        () => {
          return resolve();
        },
        (): any => reject("insertIntoConfig Failed")
      );
    });
  });
}

export function selectFromJSON() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM json",
        null,
        (txObj, resultSet) => {
          let json = resultSet.rows._array;
          return resolve(json);
        },
        (): any => reject("selectFromJSON Failed")
      );
    });
  });
}
export function selectFromConfig() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM config",
        null,
        (txObj, resultSet) => {
          let version = resultSet.rows._array[0].version;
          return resolve(version);
        },
        (): any => reject("selectFromConfig Failed")
      );
    });
  });
}
export function selectFromTutorials() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tutorials",
        null,
        (txObj, resultSet) => {
          tutorials = resultSet.rows._array;
          return resolve(tutorials);
        },
        (): any => reject("selectFromConfig Failed")
      );
    });
  });
}

export default {
  dropTableTutorials,
  selectFromTutorials,
  insertIntoTutorials,
  createTableTutorials,
  dropTableConfig,
  selectFromConfig,
  insertIntoConfig,
  createTableConfig,
  dropTableJSON,
  insertIntoJSON,
  createTableJSON,
};
