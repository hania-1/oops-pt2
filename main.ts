 //canPrograme
 
 class Student {
    public _name : string ;
    age : number;

    constructor (name : string , stdage : number){
        this._name = name;
        this.age = stdage;
    }
    canPrograme (): void {
        console.log ( "we are students")
    }
 }

 let s1 : Student = new Student ("hania", 18)
 s1._name = "hania rizwan"
 console.log(s1)
 s1.canPrograme()

 //canPrograme with if else 

 class Drive {
      public myname : string ;
      myage : number ;

      constructor (Name : string , Myage : number ){
        this.myname = Name
        this.myage = Myage
      }
      canPrograme () : boolean {
          return this.myage > 12;
      }
 }

 let drive : Drive = new Drive ("hania" , 18)
 
 if (drive.canPrograme ()) {
     console.log (`${drive.myname} you can drive!`)
 }else {
    console.log(`${drive.myname}  you cant drive!`)
 };

 //canPrograme with getter & setter.

 class Person {
    private _name : string ;
    private  _age : number ;

    constructor ( name : string , age : number) {
        this._name = name ;
        this._age = age ;
    }
    canPrograme () : boolean {
        return this._age > 17;
    }

// Getter for 'name'
get name(): string {
    return this._name;
}

// Setter for 'age'
set name(newName: string) {
    this._name = newName;
}

// Getter for 'age'
get age(): number{
    return this._age;
}

// Setter for 'name'
set age(newAge: number) {
    this._age = newAge;
}
}

let person = new Person ("alice" , 18);

// console.log (person.name);
// console.log (person.age);

if (person.canPrograme()) {
    console.log(`${person.name}  is a grown up child!`)
}else {
    console.log(`${person.name} is a kid!`)
}

// person.name = "bob";
// person.age = 19;

// console.log(person.name); // Output: Bob
// console.log(person.age);  // Output: 30
