import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");
class Database{
    constructor() {
        db.transaction(tx => {
          tx.executeSql(
            "create table if not exists items (status text, done int);"
          ),
          tx.executeSql(
            "INSERT INTO items (status, done) SELECT * FROM (SELECT 'status', 0) AS tmp WHERE NOT EXISTS (SELECT status FROM items WHERE status = 'status') LIMIT 1;"
          );
        });
      }

    getStatus(success_callback,fail_callback){
        db.transaction(
          tx => {
            tx.executeSql("select done from items where status = 'status'", [],(_,{ rows:{_array} })=>success_callback(_array),fail_callback());
          }
        );
      }

    setStatus1(success_callback,fail_callback){
        db.transaction(
          tx => {
            tx.executeSql("update items set done = 1 where status = 'status' ");
          },
        );
      }
    setStatus0(success_callback,fail_callback){
        db.transaction(
          tx => {
            tx.executeSql("update items set done = 0 where status = 'status'");
          },
        );
      }
}
const database = new Database();
export default database;