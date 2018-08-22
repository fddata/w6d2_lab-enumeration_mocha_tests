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

//
// const getEvenNumbers = () => {
//   const result = numbers.filter((number) => {
//     return number % 2 === 0;
//   });
//   return result;
// };
// console.log("get getEvenNumbers result:", getEvenNumbers());




module.exports = Cinema;
