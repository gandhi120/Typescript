//Type...
type Vehicle={
    name:string,
    model:string,
};
type Car=Vehicle&{
    power:number,
};

const sp:Car={name:'Spleder',model:'ui',power:232}
console.log('sp',sp);

//Interface...
interface User{
    name:string,
    age:number
}
interface Employee extends User{
    id?:123, //optional
}
const va:Employee={name:'varun',age:22}