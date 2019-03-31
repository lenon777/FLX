let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if (val !== '') args.push(+val);
    });
});

function avg(...args) {
    return args.reduce((sum, x) => sum + x) / args.length;
}

console.log(avg(...args));
