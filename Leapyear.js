1. //Write a program to find whether a given year {
    
    function LeapYear(year){
        if(year%4==0 && year%100!=0 || year%400===0){
    return(`${year} is a leap year`)
        }
        else{
            return(`$(year) is not a leap year`)
        }
    }
    
    var year = 2023
    console.log(LeapYear(year))
    
    
