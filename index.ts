let a:number=2;
console.log('Hello typescript',a);
let anything:any=132;
console.log('anyt:',anything)

//unknow::use when you not take desicon about variable type.Like after api call variable may be some time boolean or string that time you can use unknow.
let b:unknown=3;
if(typeof b === 'string'){
    b.charAt(1);
}

//Never 
//->You can use never when you want not return any thing from function.See below example.
function setError(message:string):never{
    throw new Error(message)
}
setError('error:::');

//void
//Definition: This function only perform operation do not return any value like only perform add,multiply.
function logMessage(message: string): void {
    console.log(message);
    // No return statement, hence the function returns void
}

//SEE ALL TYPE FUNCTION in other file