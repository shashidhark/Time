# Time

General purpose time library

Usage:
Execute using node.js first Install **node.js**
```sh
$ nodejs Time.js
```
Example:
Add these at the end of `Time.js` file, and run above command.
```sh
var time1 = new Time(2, 10, 10); //2hr 10min 10sec
var time2 = new Time(3, 11, 0); //3hr 11min

var sum = time1.calcSum(time2);
console.log(sum);
console.log(sum.format());
console.log("---");

var diff = time1.calcDiff(time2);
console.log(diff);
console.log(diff.format());
console.log("---");
```
