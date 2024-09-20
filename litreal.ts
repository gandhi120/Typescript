//literal types in typescript..
//String literal type //number // object //boolean //mix

type Greeting ="Hello"|2|"Kya hal chaal";

function greet(greeting:Greeting){
    console.log(greeting);
}
greet("Hello");
greet(2);