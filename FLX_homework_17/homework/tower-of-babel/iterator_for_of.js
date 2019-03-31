const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let current = 1;
        return {
            next() {
                if (current > max) {
                    return {done: true}
                } else {
                    let result = current;
                    if (current % 15 === 0) {
                        result = 'FizzBuzz';
                    } else if (current % 5 === 0) {
                        result = 'Buzz';
                    } else if (current % 3 === 0) {
                        result = 'Fizz';
                    }
                    current++;
                    return {done: false, value: result}
                }
            }
        }
    }
};

for (var n of FizzBuzz) {
    console.log(n);
}
