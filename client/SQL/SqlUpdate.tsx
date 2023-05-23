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

export function createTableTutorials() {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tutorials (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, textdata TEXT)",
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
        tx.executeSql(
          "INSERT INTO tutorials (name, textdata) VALUES(?,?)",
          [tutorial.name, tutorial.textdata],
          () => {
            return resolve();
          },

          (): any => reject("insertIntoTutorials Failed")
        );
      });
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
};
