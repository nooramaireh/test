class DOB {
    #day;
    #month;
    #year;

    constructor(day, month, year){
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }

    #checkIsNumber(number){
        if(typeof number !== 'number'){
            throw new Error ('must be a number');
        }
    }

    checkValidDay(day){
        if(day < 1 || day > 30){
            throw new Error('Day NOT VALID!');
        }
    }

    checkValidMonth(month){
        if(month < 1 || month > 12){
            throw new Error('Month NOT VALID!');
        }
    }

    checkValidYear(year){
        if(year < 1900 || year > 2010){
            throw new Error('Year NOT VALID!');
        }
    }

    setDay(day){
        this.#checkIsNumber(day);
        this.checkValidDay(day);
        this.#day = day;
    }

    setMonth(month){
        this.#checkIsNumber(month);
        this.checkValidMonth(month);
        this.#month = month;
    }

    setYear(year){
        this.#checkIsNumber(year);
        this.checkValidYear(year);
        this.#year = year;
    }

    getDay(){
        return this.#day;
    }

    getMonth(){
        return this.#month;
    }

    getYear(){
        return this.#year;
    }

    getAge(){
        let date = new Date();
        let age = date.getFullYear() - this.#year;
        return `Age = ${age}`;
    }
}

class Address {
    #street;
    #buildigNumber;
    #city;
    #country;

    constructor(street, buildigNumber, city, country){
        this.setStreet(street);
        this.setBuildigNumber(buildigNumber);
        this.setCity(city);
        this.setCountry(country);
    }

    setStreet(street){
        this.#street = street;
    }

    setBuildigNumber(buildigNumber){
        this.#buildigNumber = buildigNumber;
    }

    setCity(city){
        this.#city = city;
    }

    setCountry(country){
        this.#country = country;
    }

    getStreet(){
        return this.#street;
    }

    getBuildigNumber(buildigNumber){
        return this.#buildigNumber;
    }

    getCity(city){
        return this.#city;
    }

    getCountry(country){
        return this.#country
    }
}

class Name{
    #firstName;
    #lastName;

    constructor(firstName, lastName){
        this.setFirstName(firstName);
        this.setLasttName(lastName);
    }

    #checkName(name){
        if(name !== undefined && !(name.length <= 50 && name.length >= 2)){
            return true;
        }
        throw new Error ('Name Error!');
    }

    setFirstName(firstName){
        this.#checkName(firstName);
        this.#firstName = firstName;
    }

    setLasttName(lastName){
        this.#checkName(lastName);
        this.#lastName = lastName;
    }

    
    getFirstName(firstName){
        return this.#firstName;
    }

    getLasttName(lastName){
        return this.#lastName;
    }

    getFullName(){
        return `${this.getFirstName()} ${this.getLasttName}`;
    }
}

class Person{
    #dob;
    #address;
    #idNumber;
    #name;

    #checkInstanceOf(classInstance, instance){
        if((instance instanceof classInstance)){
            throw new Error('instance error');
        }
    }
    constructor(dob, address, idNumber, name){
        this.setDob(dob);
        this.setAddress(address);
        this.setIdNumber(idNumber);
        this.setName(name);
    }

    setDob(dob){
        this.#checkInstanceOf(DOB,dob);
        this.#dob = dob;
    }
    setAddress(address){
        this.#checkInstanceOf(Address, address);
        this.#address = address;
    }
    setIdNumber(idNumber){
        this.#idNumber = idNumber;
    }
    setName(name){
        this.#checkInstanceOf(Name, name);
        this.#name = name;
    }
    getDob(){
        return this.#dob;
    }
    getAddress(){
        return this.#address;
    }
    getIdNumber(){
        return this.#idNumber;
    }
    getName(){
        return this.#name;
    }
}

class Student extends Person{
    courses = [];
    parentId;
    constructor(dob, Address, idNumber, name, parentId, courses = []){
        super(dob, Address, idNumber, name);
        this.parentId = parentId;
        this.courses = courses;
    }

    addCourses(name){
        this.courses.push(name);
    }

    setParentId(parentId){
        this.parentId = parentId;
    }

    getCourses(){
        return this.courses;
    }

    getParentId(){
        return this.parentId;
    }

    getName(){
        return this.name + 'student name';
    }
}

class Parent extends Person{
    studentId = [];
    constructor(dob, Address, idNumber, name, studentId = []){
        super(dob, Address, idNumber, name);
        this.studentId = studentId;
    }

    addStudentId(id){
        this.courses.push(id);
    }

    getStudentId(){
        return this.studentId;
    }
}
const dob1 = new DOB(11, 8, 1998);
console.log(dob1.getAge());
//prt = new Parent();
//console.log(dob1.getDay(), dob1.getMonth(), dob1.getYear() );
const std1 = new Student();
std1.setIdNumber(1);
console.log(std1.getIdNumber());
std1.addCourses('js', 'html', 'CSS');
console.log(std1.getCourses()); 