"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: rememberMyFilms(),
    actors: {},
    genres: writeYourGenres(),
    privat: showMyDB()
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
        lastFilmRating = prompt("На сколько оцените его?", "");
    
        if (lastFilm != null && lastFilmRating != null && lastFilm != '' && 
            lastFilmRating != '' && lastFilm.length < 50) {
                personalMovieDB.movies[`${lastFilm}${i}`] = 
                `${lastFilmRating}${i}`;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (personalMovieDB) {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`
        );
        if () {
            
        }
    }
}


function toggleVisibleMyDB() {
    if (personalMovieDB.privat === false) {
        personalMovieDB.privat = true;
    } else {
        personalMovieDB.privat = false;
    }
}