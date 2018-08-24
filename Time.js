/* 
 * Time.js, A simple library for processing time
 * Author: Shashidhara
 * Mail id: shasidharkulal@gmail.com
 */

function Time(hour, minute, sec, neg) {    
    if(arguments.length == 0){
        var date = new Date();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.sec = date.getSeconds();
    }
    else if(arguments.length >= 3){
        var hour = parseInt(hour);
        var minute = parseInt(minute);
        var sec = parseInt(sec);

        if(isNaN(hour))
            throw "hour is not a number!";
        else
            this.hour = hour;
        
        if(isNaN(minute))
            throw "minute is not a number!";
        else
            this.minute = minute;
       
        if(isNaN(sec))
            throw "sec is not a number!";
        else
            this.sec = sec;
    }
    else{
        throw "Arguments must be zero / min 3 (hour, min, sec).";
    }
    
    this.neg = neg==undefined?false:true;
}

Time.prototype.convertToSeconds = function () {
    return this.hour * 60 * 60 + this.minute * 60 + this.sec;
};

Time.prototype.format = function () {
    return (this.neg?'-':'') + this.hour + "h " + this.minute + "m " + this.sec + "s ";
};

//static function
Time.convertToSeconds = function (time) {
    return time.hour * 60 * 60 + time.minute * 60 + time.sec;
};

//static function
Time.secToTime = function (sec, danger) {
    var hour = parseInt(sec / 3600);
    var hour_rem = sec % 3600;
    var minute = parseInt(hour_rem / 60);
    sec = hour_rem % 60;
    return new Time(hour, minute, sec, danger);
};

Time.prototype.calcDiff = function (time) {
    var sec1 = time.convertToSeconds();
    var sec2 = this.convertToSeconds();
    var diff = sec2 - sec1;
    var danger = false;
    if(diff<0)
        danger = true;
    var sec = Math.abs(diff);
    return Time.secToTime(sec, danger);
};

Time.prototype.calcSum = function (time) {
    var sec1 = time.convertToSeconds();
    var sec2 = this.convertToSeconds();
    var sec = sec2 + sec1;
    return Time.secToTime(sec);
};

//static function
Time.addTimeArray = function (timeArray) {
    var getSum = function (total, num) {
        return total + num;
    };
    return Time.secToTime(timeArray.reduce(getSum));
};

Time.prototype.isCrossed = function(time){
    var sec1 = time.convertToSeconds();
    var sec2 = this.convertToSeconds();
    if(sec2 > sec1){
        return true;
    }
    return false;
}
