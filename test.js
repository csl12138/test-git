const arr = [
    {
        name: undefined,
        age: 38,
    },
    {
        age: 38,
    },
    {
        sex: 'xx'
    }
];

// const arr = [
//     {
//         a: 1,
//         b: 2,
//     },
//     {
//         a: 1,
//         b: 2,
//     },
//     {
//         c: 3,
//     }
// ]

function uniqueArr(arr) {
    const res = [];
    arr.forEach(item => {
        if (typeof item === 'object' && item !== null) {
            item = _replaceUndefined(item);
            const filterArr = res.filter(i => JSON.stringify(i) === JSON.stringify(item));
            filterArr.length === 0 && res.push(item);
        }
    });
    return res;
};

function _replaceUndefined(obj) {
    const record = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            if (obj[key] === undefined) {
                record[key] = 'undefined';
            }
        }
    }
    return Object.assign(obj, record);
}

function _paseUndefined(arr) {
    arr.forEach(item => {
        const 
    });
}

// function uniqueFunc(arr, uniId){
//     const res = new Map();
//     return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
//   }

console.log(uniqueArr(arr));

