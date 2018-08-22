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

module.exports = Cinema;
