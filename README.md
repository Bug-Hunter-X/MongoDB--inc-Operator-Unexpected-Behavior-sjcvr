# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The incorrect usage can lead to unexpected results. 
The `bug.js` file contains the code that produces the issue. The `bugSolution.js` contains the corrected implementation.
## Bug Description
The primary issue lies in how the `$inc` operator is utilized within the `updateOne` method. It's crucial to ensure that the field being incremented exists in the document. If it doesn't, the `$inc` operator won't create a new field, potentially causing a failure to update the document correctly. This error often goes unnoticed, as it doesn't raise explicit exceptions.
## Solution
The solution involves using the `$setOnInsert` operator to first check if the field exists before using the `$inc` operator