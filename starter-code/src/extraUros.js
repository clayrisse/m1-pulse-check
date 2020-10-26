let chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  jokes:[
    'Chuck Norris counted to infinity... Twice.',
    'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
  ],
  displayInfo: function() {
    console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
  },
  // TASK 1
  addJoke: function(str){ 
    this.jokes.push(str)
  },
  // TASK 2 - Return random joke from the jokes array
  getRandomJoke: function() {
    return this.jokes[Math.floor(Math.random()*this.jokes.length)]
  },
  // TASK 3
  getAge: function() {
  let today = new Date()
  return Math.floor((today.getTime()-this.birthDate.getTime())/60/60/24/365/1000)
  },
}




class HeroClass {
  constructor(name, superpowers, costumecolor, location){
  this.name= name,
  this.superpowers = superpowers,
  this.costumecolor = costumecolor,
  this.location = location
  }
  heroDescription(){
    console.log( `${this.name} - ${this.superpowers} - ${this.location}`)
  }
  heroLocation () {
   console.log(`${this.name} is hidding in ${this.location}`)
  }
 static className() {
   console.log(`"HERO CLASS"`)
    // Your code here ..
  }
}
const bananaman = new HeroClass(
  "Banananman",
  "Flight, Invulnerability, Helium-boosted heat finger",
  "blue and yellow",
  "Metropolis"
);
// console.log(bananaman);
bananaman.heroDescription();    // Expected:  "Banananman - Flight, Invulnerability, Helium-boosted heat finger - Metropolis"
bananaman.heroLocation();    // Expected:  "Banananman is hidding in Metropolis"
HeroClass.className();    // Expected:  "HERO CLASS"

class SuperHeroClass extends HeroClass {
  constructor(name, superpowers, costumeColor, location, immortal) {
  super(name, superpowers, costumeColor, location)
  this.immortal=immortal
  }
}

const xbananaman = new SuperHeroClass(
  "xBanananman",
  "xFlight, Invulnerability, Helium-boosted heat finger",
  "xblue and yellow",
  "xMetropolis",
  "inmortalXXXXXX"
);

console.log(xbananaman)
