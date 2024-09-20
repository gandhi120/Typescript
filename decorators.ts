//Decorators are used for annotations and a meta-programming syntax..
//class
//method
//property
//parameter
//accessor

function simpleClassDecorator(constructor:Function) {
    console.log('Class Decorators');
    
}
@simpleClassDecorator
class MyClass {
    constructor() {
        console.log('My class');
        
    }
}

const cl= new MyClass();