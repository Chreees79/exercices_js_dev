const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Sors une array qui ne contient que le prénom et le nom des entrepreneurs
/* function getfirstLastname(entrepreneurs) {
    console.log("Voici les prénoms et noms des entrepreneurs :");
    return entrepreneurs.map(entrepreneur => entrepreneur.first + " " + entrepreneur.last);
};
console.log(getfirstLastname(entrepreneurs));
 */

// Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui
/* function changeYearInAge(entrepreneurs){
  console.log("Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui");
  const entrepreneursAges = [];
  let currentYear = new Date().getFullYear();
  entrepreneurs.forEach(e =>
  entrepreneursAges.push({first: e.first, last: e.last, age: (currentYear - e.year)}));
  return entrepreneursAges;
};
console.log(changeYearInAge(entrepreneurs));
 */

//Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName
/* 
function changeFirstAndLast(entrepreneurs) {
  const array = [];
  let currentYear = new Date().getFullYear();
  entrepreneurs.forEach(e => array.push({firstName: e.first, lastName: e.last, age: (currentYear - e.year)}));
  return array;
};
console.log(changeFirstAndLast(entrepreneurs));
 */
