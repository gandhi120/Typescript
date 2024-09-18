//create components that can work with any data type while still maintaining..

//generic function..
function identity<T>(arg:T):T{
    return arg;
}

let numberIdentity=identity<number>(34);
let numberIdentity2=identity<string>('34');

//you can assign type dynamically using generic..
interface Pair<T,U>{
    first:T;
    second:U;
};

let numberStringPair:Pair<number,string>={
    first:34,
    second:'34'
}

let numberString:Pair<number,boolean>={
    first:34,
    second:true,
}

//2 example
class Stack<T>{
    private items:T[]=[];

    push(items:T):void{
        this.items.push(items);
    }

    pop():T|undefined{
        return this.items.pop();
    }
}

const numberStack=new Stack<number>();
numberStack.push(2)
console.log(numberStack);
console.log(numberStack.pop());
