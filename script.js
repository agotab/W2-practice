function logger(kismacska) {
    /* let kismacska = 'hello' */
    console.log(kismacska)
}

logger('hello')
logger('ciao')
logger('szia')

function logTheSumOfTwoNumbers(x, y) { /* camelCase */
/* let x =
    let y = */

    console.log(x + y)
}

logTheSumOfTwoNumbers(1, 2);

function sumOfTwoNumbers(x, y) {
    let sum = 0;
    sum = x + y;

    return sum;
}

logger(sumOfTwoNumbers(10, 5))