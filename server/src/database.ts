const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

const dbName = 'NoSqlCourse';

var _db: any;

export const connect = function( callback: Function ) {
  MongoClient.connect( url,  { useNewUrlParser: true }, function( err: any, client: any ) {
    _db  = client.db(dbName);
    return callback( err );
  });
};


export const getDb = function() {
  return _db;
};