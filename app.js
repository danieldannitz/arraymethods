// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function filter() {
  let result = inventors.filter(
    (born) => born.year >= 1500 && born.year <= 1599
  );
  let convertResult = JSON.stringify(result);
  let selectParagraph = document.querySelector(".result");
  selectParagraph.innerHTML = `${convertResult}`;
}
filter();

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
function map() {
  let fullName = inventors.map((name) => {
    return `${name.first} ${name.last}`;
  });
  let convertResult = JSON.stringify(fullName);
  let selectParagraph = document.querySelector(".second-exercise p");
  selectParagraph.innerHTML = `${convertResult}`;
}
map();

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function firstSort() {
  let result = inventors.sort((a, b) => {
    return a.year - b.year;
  });
  let convertResult = JSON.stringify(result);
  let selectParagraph = document.querySelector(".third-exercise p");
  selectParagraph.innerHTML = `${convertResult}`;
}
firstSort();

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function reduce() {
  let result = inventors.reduce((a, b) => {
    //a = 0(start value), b = (callback from the object)
    return a + (b.passed - b.year);
  }, 0);
  let convertResult = JSON.stringify(result);
  let selectParagraph = document.querySelector(".fourth-exercise p");
  selectParagraph.innerHTML = `${convertResult}`;
}
reduce();

// 5. Sort the inventors by years lived
function secondSort() {
  let result = inventors.sort((a, b) => {
    //the sort method, by default will return an ascending array
    //when we compare an array using the sort method, it will either return a:
    // 1. positive number
    // 2. 0
    // 3. a negative number
    const aList = a.passed - a.year;
    const bList = b.passed - b.year;
    //statement using the ternary operator if true "?" return -1 if false ":" return 1
    return aList > bList ? -1 : 1;
    //classic method
    // if (aList > bList) {
    //   return -1;
    // } else {
    //   return 1;
    // }
  });

  let convertResult = JSON.stringify(result);
  let selectParagraph = document.querySelector(".fifth-exercise p");
  selectParagraph.innerHTML = `${convertResult}`;
}
secondSort();

const boulevards = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
function filterNames() {
  let result = boulevards.filter((de) => {
    return de.includes("de");
  });
  let convertResult = JSON.stringify(result);
  let selectParagraph = document.querySelector(".sixth-exercise p");
  selectParagraph.innerHTML = `${convertResult}`;
}
filterNames();

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// 7. sort Exercise
// Sort the people alphabetically by last name
function thirdSort() {
  let result = people.sort((a, b) => {
    let [aLast, aFirst] = a.split(", ");
    let [bLast, bFirst] = b.split(", ");
    return aLast > bLast ? 1 : -1;
  });
  let convertResult = JSON.stringify(result);
  let selectParagraph = document.querySelector(".seventh-exercise p");
  selectParagraph.innerHTML = `${convertResult}`;
}
thirdSort();

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

function lastExercise() {
  let result = data.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  let convertResult = JSON.stringify(result);
  let selectParagraph = document.querySelector(".eigth-exercise p");
  selectParagraph.innerHTML = `${convertResult}`;
}

lastExercise();
