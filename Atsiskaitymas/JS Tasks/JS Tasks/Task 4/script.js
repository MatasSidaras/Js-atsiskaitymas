/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) 
    {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
    wasExpensive = function () {
     if (this.budget > 100000000) {
     return true;
    } else {
      return false;
    }
    } 
  }
  
  const movieMaker = new Movie('The Hobbit: The Battle of the Five Armies', 'J. R. R. Tolkien', 250000000);

  movieMaker.wasExpensive();
  console.log(movieMaker.wasExpensive(), movieMaker.budget + ' USD');

  