console.log("Das erste JavaScript");
/*
let empty = { };

let animal = {
    'name': '',
    'age': 0,
    'eat': function (food) { 
      console.log('Mmpf mmpf, ' + food + '!');
    }
};

let cat = Object.create(animal);

cat.eat('mouse');
console.log(cat.age);

cat.meow = function() {
    console.log('Miauuuu!');
}
  
cat.meow();

let vegetarianCat = Object.create(cat);
vegetarianCat.eat = function (food) {
    if (food.indexOf('mouse') >= 0) {
        console.log("I don't like mice!");
    } else {
        this.__proto__.eat(food);
    }
};

vegetarianCat.eat('water, mouse');
vegetarianCat.eat('water');
*/

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

let fish = new Animal('Nemo', 2);
console.log(fish.age);




