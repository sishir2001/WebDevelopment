// Homework5 - switch statements , complete the extra credits too.

function timeAdder(value1,label1,value2,label2){
    // conditions for invalid arguments 
    if(typeof(value1) !== "number" || typeof(value2) !== "number") return false;
    if(typeof(label1) !== "string" || typeof(label2) !== "string") return false;
    // for maintaining uniformity .
    label1 = label1.toLowerCase();
    label2 = label2.toLowerCase();
    if(label1 !== "second" && label1 !== "seconds" && label1 !== "minute" && label1 !== "minutes" && label1 !== "hour" && label1 !== "hours" && label1 !== "day" && label1 !== "days") return false;
    if(label2 !== "second" && label2 !== "seconds" && label2 !== "minute" && label2 !== "minutes" && label2 !== "hour" && label2 !== "hours" && label2 !== "day" && label2 !== "days") return false;
    if(value1 < 0 || value2 <0) return false;
    if(value1 !== 1 && (label1 === "minute" ||label1 === "second"||label1 === "hour"||label1 === "day" )) return false;
    if(value2 !== 1 && (label2 === "minute" ||label2 === "second"||label2 === "hour"||label2 === "day" )) return false;
    if(value1 === 1 && (label1 === "minutes" ||label1 === "seconds"||label1 === "hours"||label1 === "days" )) return false;
    if(value2 === 1 && (label2 === "minutes" ||label2 === "seconds"||label2 === "hours"||label2 === "days" )) return false;

    let label3;
    let value3;
    switch(label1){
        case "second":
        case "seconds":
            switch(label2){
                case "second":
                case "seconds":
                    // l1 - sec and l2 - sec
                    value3 = value1 + value2;
                    label3 = "seconds";
                    // for min - larger int.
                    if(value3 % 60 === 0){
                        if(value3 / 60 === 1){
                            value3 = 1;
                            label3 = "minute";
                        }
                        else{
                            value3 = value3/60;
                            label3 = "minutes";
                        }
                    }                    
                    break;
                
                case "minute":
                case "minutes":
                    // l1 - sec and l2 - min
                    value3 = value1 + value2*60;
                    label3 = "seconds";        
                    // for hours - larger int               
                    if(value3 % (60*60) === 0){
                        if(value3 / (60*60) === 1){
                            value3 = 1;
                            label3 = "hour";
                        }
                        else{
                            value3 = value3/(60*60);
                            label3 = "hours";
                        }
                    }
                    else if (value3 % 60 === 0){
                        value3 = value3/60;
                        label3 = "minutes";
                    }   
                    break;
                
                case "hour":
                case "hours":
                    // l1 - sec and l2 - hours
                    value3 = value1 + value2*60*60;
                    label3 = "seconds";    
                    // checking for day - larger int    
                    if(value3 % (60*60*24) === 0){
                        if(value3 / (60*60*24) === 1){
                            value3 = 1;
                            label3 = "day";
                        }
                        else{
                            value3 = value3/(60*60*24);
                            label3 = "days";
                        }
                    }
                    // for hours                 
                    else if(value3 % (60*60) === 0){
                        value3 = value3/(60*60);
                        label3 = "hours";
                    }
                    else if(value3 % 60 === 0){
                        value3 = value3/60;
                        label3 = "minutes";
                    }   
                    break;
                
                case "day":
                case "days":
                    // l1 - sec and l2 - days
                    value3 = value1 + value2*60*60*24;
                    label3 = "seconds";        
                    if(value3 % (60*60*24) === 0){
                        value3 = value3/(60*60*24);
                        label3 = "days";
                    }
                    // for hours                 
                    else if(value3 % (60*60) === 0){
                        value3 = value3/(60*60);
                        label3 = "hours";
                    }
                    else if(value3 % 60 === 0){
                        value3 = value3/60;
                        label3 = "minutes";
                    }   
                    break;
            }
            break;

        case "minute":
        case "minutes":
            switch(label2){
                case "second":
                case "seconds":
                    // l1 - min l2 - sec
                    value3 = value1*60 + value2;
                    label3 = "seconds";
                    // for hours - larger int 
                    if(value3 % (60*60) === 0){
                        if(value3 / (60*60) === 1){
                            value3 = 1;
                            label3 = "hour";
                        }
                        else{
                            value3 = value3/(60*60);
                            label3 = "hours"
                        }
                    }
                    // for minutes - larger int 
                    else if(value3 % 60 === 0){
                        value3 = value3/60;
                        label3 = "minutes";
                    }                    
                    break;
                
                case "minute":
                case "minutes":
                    // l1 - min l2 - min 
                    value3 = value2 + value1;
                    label3 = "minutes";        
                    // for hours                 
                    if(value3 % 60 === 0){
                        if(value3 /60 === 1){
                            value3 = 1;
                            label3 = "hour";
                        }
                        else{
                            value3 = value3/60;
                            label3 = "hours";
                        }
                    }
                    break;

                case "hour":
                case "hours":
                    // l1-min and l2 hours
                    value3 = value2*60 + value1;
                    label3 = "minutes";
                    // for days - larger int        
                    if(value3 % (60*24) === 0){
                        if(value3 / (60*24) === 1){
                            label3 = "day";
                            value3 = 1;
                        }
                        else{
                            value3 = value3/(60*24);
                            label3 = "days";
                        }
                    }
                    // for hours - larger int            
                    else if(value3 % 60 === 0){
                        label3 = "hours";
                        value3 = value3 / 60;
                    }
                    break;
                
                case "day":
                case "days":
                    // l1 - min and l2 - days
                    value3 = value1 + value2*60*24;
                    label3 = "minutes";        
                    // for days - larger int 
                    if(value3 % (60*24) === 0){
                        label3 = "days";
                        value3 = value3/(60*24);
                    }
                    // for hours - larger int                 
                    else if(value3 % 60 === 0){
                        label3 = "hours";
                        value3 = value3 / 60;
                    }
                    break;
            }
            break;

        case "hour":
        case "hours":
            switch(label2){
                case "second":
                case "seconds":
                    // l1 - hour l2 - sec
                    value3 = value1*60*60 + value2;
                    label3 = "seconds";
                    // for days - larger int
                    if (value3 % (60*60*24) === 0){
                        if(value3 / (60*60*24) === 1){
                            value3 = 1;
                            label3 = "day";
                        }
                        else{
                            value3 = value3/(60*60*24);
                            label3 = "days";
                        }
                    }
                    // for hours - larger int 
                    else if(value3 % (60*60) === 0){
                        value3 = value3/(60*60);
                        label3 = "hours";
                    }
                    else if(value3 % 60 === 0 ){
                        value3 = value3/60;
                        label3 = "minutes";
                    }
                    break;
                
                case "minute":
                case "minutes":
                    // l1 - hours l2 - min 
                    value3 = value2 + value1*60;
                    label3 = "minutes";
                    // for days - larger int        
                    if(value3%(60*24) === 0){
                        if(value3 / (60*24) === 1){
                            value3 = 1;
                            label3 = "day";
                        }
                        else{
                            value3 = value3/(60*24);
                            label3 = "days";
                        }
                    }
                    // for hours - larger int  
                    else if(value3 % 60 === 0){
                        value3 = value3/60;
                        label3 = "hours";
                    }
                    break;

                case "hour":
                case "hours":
                    // l1-hours and l2 hours
                    value3 = value2 + value1;
                    label3 = "hours";
                    // for days - larger int        
                    if(value3 % 24 === 0){
                        if(value3 / 24 === 1){
                            label3 = "day";
                            value3 = 1;
                        }
                        else{
                            value3 = value3/24;
                            label3 = "days";
                        }
                    }
                    break;
                
                case "day":
                case "days":
                    // l1 - hours and l2 - days
                    value3 = value1 + value2*24;
                    label3 = "hours";        
                    // for days - larger int 
                    if(value3 % 24 === 0){
                        label3 = "days";
                        value3 = value3/24;
                    }
                    break;
            }
            break;

        case "day":
        case "days":
            switch(label2){
                case "second":
                case "seconds":
                    // l1 - days l2 - sec
                    value3 = value1*60*60*24 + value2;
                    label3 = "seconds";
                    // for days - larger int
                    if (value3 % (60*60*24) === 0){
                        if(value3 / (60*60*24) === 1){
                            value3 = 1;
                            label3 = "day";
                        }
                        else{
                            value3 = value3/(60*60*24);
                            label3 = "days";
                        }
                    }
                    // for hours - larger int 
                    else if(value3 % (60*60) === 0){
                        value3 = value3/(60*60);
                        label3 = "hours";
                    }
                    else if(value3 % 60 === 0 ){
                        value3 = value3/60;
                        label3 = "minutes";
                    }
                    break;
                
                case "minute":
                case "minutes":
                    // l1 - days l2 - min 
                    value3 = value2 + value1*24*60;
                    label3 = "minutes";
                    // for days - larger int        
                    if(value3%(60*24) === 0){
                        if(value3 / (60*24) === 1){
                            value3 = 1;
                            label3 = "day";
                        }
                        else{
                            value3 = value3/(60*24);
                            label3 = "days";
                        }
                    }
                    // for hours - larger int  
                    else if(value3 % 60 === 0){
                        value3 = value3/60;
                        label3 = "hours";
                    }
                    break;

                case "hour":
                case "hours":
                    // l1-days and l2 hours
                    value3 = value2 + value1*24;
                    label3 = "hours";
                    // for days - larger int        
                    if(value3 % 24 === 0){
                        if(value3 / 24 === 1){
                            label3 = "day";
                            value3 = 1;
                        }
                        else{
                            value3 = value3/24;
                            label3 = "days";
                        }
                    }
                    break;
                
                case "day":
                case "days":
                    // l1 - days and l2 - days
                    value3 = value1 + value2;
                    label3 = "days";    
                    break;
            }
            break;
    }
    return [value3,label3];

}

// main
console.log("timeAdder(12,hour,12,hours) : ");
console.log(timeAdder(12,"hour",12,"hours")); // invalid arguments - hour - singular

console.log("timeAdder(12,hours,12,hours) : ");  
console.log(timeAdder(12,"hours",12,"hours")); // valid arguments 

console.log("timeAdder(12,second,48,seconds):"); 
console.log(timeAdder(12,"second",48,"seconds")); // invalid arguments - second - singular

console.log("timeAdder(12,seconds,48,seconds):");  
console.log(timeAdder(12,"seconds",48,"seconds")); // valid arguments 

console.log("timeAdder(12,seconds,108,seconds): ");
console.log(timeAdder(12,"seconds",108,"seconds")); // valid arguments 

console.log("timeAdder(1,days,108,seconds): ");
console.log(timeAdder(1,"days",108,"seconds")); // invalid arguments - days - plural

console.log("timeAdder(1,day,108,seconds) : "); 
console.log(timeAdder(1,"day",108,"seconds")); // valid arguments 

console.log("timeAdder(30,minutes,90,minutes):");
console.log(timeAdder(30,"minutes",90,"minutes")); // valid arguments

console.log("timeAdder(false,false,5,minutes):");
console.log(timeAdder(false,false,5,"minutes")); // invalid arguments

console.log("timeAdder({},days,5,minutes):"); 
console.log(timeAdder({},"days",5,"minutes")); // invalid arguments

console.log("timeAdder(20,hours,4,hours):"); 
console.log(timeAdder(20,"hours",4,"hours")); // valid arguments

console.log("timeAdder(20,hours,5,hours):"); 
console.log(timeAdder(20,"hours",5,"hours")); // valid arguments
