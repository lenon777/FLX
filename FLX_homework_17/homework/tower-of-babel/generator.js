const max = process.argv[2];
let FizzBuzz = function* () {
    let current = 1;

    while (current <= max) {
        let result = current;
        if (current % 15 === 0) {
            result = 'FizzBuzz';
        } else if (current % 5 === 0) {
            result = 'Buzz';
        } else if (current % 3 === 0) {
            result = 'Fizz';
        }
        current++;
        yield result;
    }
}();
for (let n of FizzBuzz) {
    console.log(n);
}
