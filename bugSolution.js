```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
  $setOnInsert:{"counter":0},
  $inc:{"counter":10}
});
```