// var myVideo = document.getElementById(video1);

// function playPause() {
//     if(myVideo.paused)
//     myVideo.play();
//     else myVideo.paused();
// }

// function makeBig() {
//     myVideo.width = 560;
// }
// function makeSmall() {
//     myVideo.width = 240;
// }
// function makeNormal() {
//     myVideo.width = 420;
// }


// let cards = [1, 2, 3, 4, 5, 6, 7];
// let [car1, ...dRest] = cards;


// console.log(...dRest)
// console.log(cards)

// function sendCars(day, ...allCarId) {
//     allCarId.forEach(id => console.log(id))
// }
// sendCars(2,4,5,6,67);

// function names(...dRest) {
// dRest.forEach(id => console.log(id));
// }
// names("Emeka is my good friend", "Ada is just a crook",
//  "john is out of his mind",
//  "love is blind", "Tessy is tasteless")

//  console.log(5 < 0 ? "we" : "nah");

//  let age = 18;
//  age /= 2;

// //  console.log(age)

// let cars = ["benz", "honda", "camry20", "pigeot", "lambo320"]

// cars.forEach (id => {
//     if(cars[id] == 5) {
//         console.log(cars[3])
//     }else {
//         console.log(false)
//     }
// })

// console.log(2  == "00002" ? true : false)


// function startCar(carSoundId) {
//     var message = "starting ...";
//     let myFunc = function myCar() {
//     let message = "not Starting";
//     };
// myFunc();
// console.log(message)
// }

// startCar(123)

// if(5 === 5) {
//     let message = "praise"  
// }
//  const app = (function cat() {
//     let cap = 123;
//     console.log("bank")
//     return{}
//  })();

//  console.log(app)

//  let box = (function () {
//     let meal = "beans";
//     let food = function() {
//         return meal;
//     }
//     return {
//         food : food
//     };
//  })()

//  console.log(box)

//   let app = (function () {
//     let carId = "6cm";
//     let getId = () => {
//         return carId;
//     };
//    return{
//     getId: getId
//    };
//   })()

//   console.log(app.getId())

//    let bottle = (function () {
//     let bottleLength = "6cm";
//     let getBottleLength = () => {
//         return bottleLength;
//     }
//     return {
//         getBottleLength: getBottleLength
//     };
//    })();

//    console.log(bottle.getBottleLength())

let human = {
    gender:"male",
    species:function() {() => {
    }
    return this.gender;
    }
};
console.log(human.species());





