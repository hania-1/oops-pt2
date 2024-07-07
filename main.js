//canPrograme
var Student = /** @class */ (function () {
    function Student(name, stdage) {
        this._name = name;
        this.age = stdage;
    }
    Student.prototype.canPrograme = function () {
        console.log("we are students");
    };
    return Student;
}());
var s1 = new Student("hania", 18);
s1._name = "hania rizwan";
console.log(s1);
s1.canPrograme();
//canPrograme with if else 
var Drive = /** @class */ (function () {
    function Drive(Name, Myage) {
        this.myname = Name;
        this.myage = Myage;
    }
    Drive.prototype.canPrograme = function () {
        return this.myage > 12;
    };
    return Drive;
}());
var drive = new Drive("hania", 18);
if (drive.canPrograme()) {
    console.log("".concat(drive.myname, " you can drive!"));
}
else {
    console.log("".concat(drive.myname, "  you cant drive!"));
}
;
//canPrograme with getter & setter.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Person.prototype.canPrograme = function () {
        return this._age > 17;
    };
    Object.defineProperty(Person.prototype, "name", {
        // Getter for 'name'
        get: function () {
            return this._name;
        },
        // Setter for 'age'
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        // Getter for 'age'
        get: function () {
            return this._age;
        },
        // Setter for 'name'
        set: function (newAge) {
            this._age = newAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("alice", 18);
// console.log (person.name);
// console.log (person.age);
if (person.canPrograme()) {
    console.log("".concat(person.name, "  is a grown up child!"));
}
else {
    console.log("".concat(person.name, " is a kid!"));
}
// person.name = "bob";
// person.age = 19;
// console.log(person.name); // Output: Bob
// console.log(person.age);  // Output: 30
