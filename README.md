# Time

General purpose time library

Method 1:
Install **node.js**
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

Method 2:
Link Time.js to a webpage.
```sh
<script type="text/javascript" src="Time.js"></script>

<script type="text/javascript">
 ..code..
</script>
```

## Featrures
Creating new Time
* current system time
```sh
var time1 = new Time();
```
* custom time - 10h 3m 0s
```sh
var time1 = new Time(10, 3, 0);
```
* Eandling exception
```sh
try{
    var time1 = new Time("sdf"); //Invalid argument
    console.log(time1.format());
}
catch(e){
    console.log("Error: " + e);
}
```
