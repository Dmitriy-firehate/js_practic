let numberOffFilms;

function start() {
    numberOffFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOffFilms == '' || numberOffFilms == null || isNaN(numberOffFilms)) {
        numberOffFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
};

start();

const personalMovieDB = {
    count: numberOffFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('Насколько оцените его?', '');

        if (a != null && b!=null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало посмотрел');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Норм');

    } else if (personalMovieDB.count >= 30) {
        console.log('Ты крут!');
    } else {
        console.log('error')
    }
}

detectPersonalLevel();