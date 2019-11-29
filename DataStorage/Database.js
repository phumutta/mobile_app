import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("db.db");
class Database{

  constructor() {

    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });


  }

  putText(text,success_callback,fail_callback){
    db.transaction(
      tx => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text],(_,{insertId})=>success_callback(insertId),fail_callback());

      },
      null,
    );
  }

  getAllText(success_callback,fail_callback)
  {
    db.transaction(
      tx => {
        tx.executeSql("select * from items", [],(_,{rows:{_array}})=>success_callback(_array),fail_callback());


      },
      null,
    );
  }

  getTodoText(success_callback,fail_callback)
  {
    db.transaction(
      tx => {
        tx.executeSql("select * from items where done = 0", [],(_,{rows:{_array}})=>success_callback(_array),fail_callback());


      },
      null,
    );
  }

  getDoneText(success_callback,fail_callback)
  {
    db.transaction(
      tx => {
        tx.executeSql("select * from items where done = 2", [],(_,{rows:{_array}})=>success_callback(_array),fail_callback());


      },
      null,
    );
  }

  getDoingText(success_callback,fail_callback)
  {
    db.transaction(
      tx => {
        tx.executeSql("select * from items where done = 1", [],(_,{rows:{_array}})=>success_callback(_array),fail_callback());


      },
      null,
    );
  }

  getText(done,success_callback,fail_callback)
  {

  }

  deleteText(id)
  {
    db.transaction(
      tx => {
        tx.executeSql("delete from items where id = ?;", [id]);


      },);
  }

  updateText2(id)
  {
    db.transaction(
      tx => {
        tx.executeSql("update items set done = 2 where id = ?", [id]);


      },);
  }
  updateText(id)
  {
    db.transaction(
      tx => {
        tx.executeSql("update items set done = 1 where id = ?", [id]);


      },);
  }
}

const database = new Database();
export default database;
