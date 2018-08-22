const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitles = function () {
  let filmsArray = [];
  const result = this.films.forEach((film) => {
    filmsArray.push(film.title);
  });
  return filmsArray;
};

Cinema.prototype.findByTitle = function (target) {
  const result = this.films.filter((film) => {
    return film.title === target;
  });
  return result[0];
};

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.filmsByYear = function (target) {
  const result = this.films.some((film) => {
    return film.year === target;
  });
  return result;
};

Cinema.prototype.filmsByLength = function (target) {
  const result = this.films.every((film) => {
    return film.length >= target;
  });
  return result;
};

Cinema.prototype.totalRunTime = function () {
  let filmsArray = [];
  const result = this.films.forEach((film) => {
    filmsArray.push(film.length);
  });
  result2 =  filmsArray.reduce((total, number) => {
    return total + number;
  });
  return result2;
};



//
// const getEvenNumbers = () => {
//   const result = numbers.filter((number) => {
//     return number % 2 === 0;
//   });
//   return result;
// };
// console.log("get getEvenNumbers result:", getEvenNumbers());




module.exports = Cinema;
