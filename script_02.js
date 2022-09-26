const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Sors-moi la liste des titres des livres du CDI
/* 
function listOfTitles(books) {
  let array = [];
  books.forEach(book => array.push(book.title));
  return array;
};
console.log(listOfTitles(books));
 */
// Est-ce que tous les livres ont été empruntés au moins une fois ?
/* 
console.log("Est-ce que tous les livres ont été empruntés au moins une fois");
const rentedOrNothing = books.every(book => book.rented > 0) ? "oui, tous les livres ont été au moins empruntés une fois" : "Non, aucun n'a été emprunté";
console.log(rentedOrNothing);
 */
//Quel est le livre le plus emprunté ?
/* 
console.log("Quel est livre le plus emprunté ?");
let max = Math.max.apply(null, books.map(book => book.rented));
const bookFind = books.find(book => book.rented === max);
console.log('le livre le plus emprunté est : ' + bookFind.title + ', et il a été emprunté: ' + bookFind.rented + ' fois.');
 */

//Quel est le livre le moins emprunté ?
/* 
console.log("Quel est livre le plus emprunté ?");
let min = Math.min.apply(null, books.map(book => book.rented));
const bookFind = books.find(book => book.rented === min);
console.log('le livre le moins emprunté est : ' + bookFind.title + ', et il a été emprunté: ' + bookFind.rented + ' fois.');
 */

//Supprime le livre avec l'ID 133712

/* console.log("Supprime le livre avec l'ID 133712")
let index = books.indexOf(books.find(book => book.id == 133712));
books.splice(index, 1);
console.log(books);
 */