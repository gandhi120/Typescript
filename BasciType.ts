const bca:number=2;
const c:boolean=true;
const arrString:string[]=['1','3'];
const arrBoolean:boolean[]=[true,false];
const arrNumber:number[]=[1,2];

// OBJECTS..
//you can pass object as type.
let User:object={
    name:'Varun',
    age:45,
}

//you can pass data type as type.
let UserOne:{name:string,age:number}={
    name:'Varun',
    age:45,
}

// Tuple..
const Tuple:[string,number,boolean]=['ty',90,true]
//you can use tuple in useState()

//ENUM..
//Basicaly enum are constants, which you can use for color.
enum Color{
    primary='Red',
    secondary='blue'
}
let col:Color=Color.secondary;
