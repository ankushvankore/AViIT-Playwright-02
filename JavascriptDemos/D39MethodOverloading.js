/*
What is Polymorphism: It the process of same type of objects to respond same message
in different way or in their own way

Purpose: Reusiblity

Expamples: 
1. Login
2. Payment gateway
3. Map

Types:
1. Compile Time
2. Run Time

Note:
JS is interpreted based language, so decision will be taken at run time only
Compilation phase is not available in JS
JS dosn't support Compile time polymorphism / Method Overloading 

Method Overloading:
Methods with same name and different signature

Signature:
1. No of arguments passed to the function
2. Data type of arguments passed to the function
3. Sequence of arguments passed to the function
*/

class Test{
    login(){
        console.log("This is default login");
    }
    login(un, ps){
        console.log("Login using user name: " + un + " and password: " + ps);        
    }
}

let t1 = new Test();
t1.login();

//JS will always call latest (last) method

//Solution
function login(){
    if(arguments.length == 0){
        console.log("Default login");        
    }
    else if(arguments.length == 2){
        console.log("Login using user name and password");
        console.log("User Name: " + arguments[0]);
        console.log("Password : " + arguments[1]);        
    }
    else if(arguments.length == 3){
        console.log("Login using user name, password & OTP");
        console.log("User Name: " + arguments[0]);
        console.log("Password : " + arguments[1]);        
        console.log("OTP      : " + arguments[2]);
        
    }
}
login();
login("test", "test123");
login("test", "test123", 1234);

/*
function trial(){
    console.log("Without parameters");
    
}
function trial(a, b){
    console.log("With parameters..");
    
}

trial();
*/