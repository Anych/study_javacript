"use strict";

let numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "100");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    lastFilmRating = prompt("На сколько оцените его?", "");

    if (lastFilm != null && lastFilmRating != null && lastFilm != '' && 
        lastFilmRating != '' && lastFilm.length < 50) {
            personalMovieDB.movies[`${lastFilm}${i}`] = `${lastFilmRating}${i}`;
    } else {
        i--;
    }
}

let i = 0;

// while (i < 2) {
//     const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//     lastFilmRating = prompt("На сколько оцените его?", "");

//     if (lastFilm != null && lastFilmRating != null && lastFilm != '' && 
//     lastFilmRating != '' && lastFilm.length < 50) {
//         personalMovieDB.movies[`${lastFilm}${i}`] = `${lastFilmRating}${i}`;
//         i++;
//     }
// }

do {
    const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    lastFilmRating = prompt("На сколько оцените его?", "");

    if (lastFilm != null && lastFilmRating != null && lastFilm != '' && 
    lastFilmRating != '' && lastFilm.length < 50) {
        personalMovieDB.movies[`${lastFilm}${i}`] = `${lastFilmRating}${i}`;
        i++;
    }
}
while (i < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
