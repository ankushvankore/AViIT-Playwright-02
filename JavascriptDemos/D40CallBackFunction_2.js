//Call Back function / Higher order function
//where one parameter for the function is of type function
//We are passing another function as a parameter to this function

function trial(){
    console.log("This is trial function...");    
}

function callBackFunction(f1){
    f1();
}

callBackFunction(trial);

function myFunction(nm){
    console.log("Welcome to Javascript, " + nm);    
}
//myFunction("Supriya");

function callBackFunction2(f1, nm){
    f1(nm);
}

callBackFunction2(myFunction, "Sanyogita");

function trialCallBack(nm, f1, f2){
    f1(nm);
    f2();
}

trialCallBack("Jasmine", myFunction, trial);
