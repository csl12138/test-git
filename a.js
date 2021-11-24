const o = {
    a: undefined,
    b: 1,
};

const vals = Object.values(o);
console.log(vals);

console.log(vals.includes(undefined));
