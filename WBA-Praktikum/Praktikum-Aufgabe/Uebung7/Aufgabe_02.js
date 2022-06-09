function Animal(averageAge,age){
    this.averageAge=0;
    this.age=0;
}


Animal.prototype.getAverageAge = function(){
    console.log(this.averageAge);
}

Animal.prototype.getAge = function(){
    console.log(this.Age);
}

Animal.prototype.setAge = function(newAge){
    this.age=newAge;
}

function Elephant () {
    Animal.call(this);
    this.averageAge=70;
 }

 Elephant.prototype=new Animal();
 Elephant.prototype.constructor = Elephant;

 //tests
 let a = new Elephant(9);
 a.setAge(3);
 console.log(a);