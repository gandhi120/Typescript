class Person{
    public name:string;
    private age:number;
    protected address:string;
    readonly birthDay:string;

    //constructor.
    constructor(name:string,age:number,address:string,birthDay:string) {
        this.name=name;
        this.age=age
        this.address=address;
        this.birthDay=birthDay
    }

    public getAge():number{
        return this.age;
    }


    public getAddress():string{
        return this.address;
    }

    public setAddress(address:string):void{
        this.address=address;
    }
}
const person1= new Person('varun',23,'India','23 may 2000');
console.log('person1',person1.getAge());
// console.log('person1',person1.address);//can not access directly protected variable only access with the class.
console.log('person1',person1.getAddress());

//here protected variable address is access in the Manager class.But private variable can not access.
// class Manager extends Person{
//     constructor(address:string){
//         this.address=address;
//     }
// }

//you can read but you can not override..
console.log('person1.birthDay',person1.birthDay);
// person1.birthDay='90 may'
 

//getter and setter..
person1.setAddress('Canada')
console.log('person1.',person1);



