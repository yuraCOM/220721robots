// get random number
export function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


//рендом массива заданной длины
export function getArrRandom(maxN, len) {
    let x = [];
    while (x.length < len) {
        let randomX = getRandomNum(1, maxN)
        !x.includes(randomX) ? x.push(randomX) : randomX = getRandomNum(1, maxN)
    }
    //рендом n
    // console.log(x);
    return x
}



// перемешать
export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

