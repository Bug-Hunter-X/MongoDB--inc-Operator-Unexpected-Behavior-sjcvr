```javascript
//Incorrect usage of $inc operator in update query
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{'counter':10}});
```