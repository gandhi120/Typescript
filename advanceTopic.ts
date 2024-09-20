//namespace..
namespace registrationValidation{
    export function validateName(name:string):boolean{
        return name.length>0;
    }
}

const isValidName = registrationValidation.validateName('asd')
console.log('isValidName',isValidName);


//type guard..
function isString(value:any):value is string{
    return typeof value==='string';
}
function checking(value:string|number){
    if(isString(value)){
        console.log('Yes its string');
    }else{
        console.log('Number');
    }
}
console.log(checking(0));

//index signature
//alow you to define types for dynamic property keys.
interface StringArray{
    [index:number]:string
}
let myArray:StringArray=['varun','gandhi'];
console.log('myArray',myArray[2]);

//key of operator..

//..........Utility Types........................
interface Animal{
    name:string;
    sound:string;
}
type PartialAnimal=Partial<Animal>;
const dog:PartialAnimal={};
// const dogTwo:Animal={};

interface Human{
    name?:string;
    sound?:string;
};
type RequireHuman=Required<Human>;
// const human:RequireHuman={};

interface Plant{
    name?:string;
    sound?:string;
    color:string;
};
type ReadOnlyPlant=Readonly<Plant>;
const plant:ReadOnlyPlant={name:'neem',sound:'op',color:'ww'};;
// plant.name='neem1'

type Records=Record<string,number>;
const ani:Records={
    name:2
}

//get only one parameter what ypu pick..
type NameOnlyPick=Pick<Plant,'name'>
let cat :NameOnlyPick={
    name:'dd',
    // ka:'d'
}

type NameOnlyOmit=Omit<Plant,'name'>
let om :NameOnlyOmit={
    color:'w',
    // name:'',
}



