let leapyear=prompt("enter leapyear");
if(leapyear%400==0){
    console.log("leap year");
}
else{
    if(leapyear%100==0){
        console.log("leapyear");
    }
    else{
        if(leapyear%4==0){
            console.log("leap year");
        }
        else{
            console.log("not a leap year");
        }
    }
}