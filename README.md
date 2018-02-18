# Create-dynamic-forms-using-json

## Installation guide

1. Clone project form github.

2. Check mongo is installed locally or not.(If not follow the installation guide from https://docs.mongodb.com/manual/installation/)

3. 
#cmd1
mongod 

#cmd2
mongo

#cmd3
npm install
bower install 
npm install -g nodemon
node seed.js
nodemon app.js 

## ---------------------------
-mongo
show dbs -- [show all databases on the server]
use db  --[switch to current db]
show collections -- [show all collectins on that database]
db.collectionname.find().pretty()[ gives the all documents in the collection]
db.collectionname.insertOne()[insert new document in to the collection]
db.collectionname.drop() [removes completely the collection]db
