
let task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


let task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// exc 0
function checkArray(arr) {
    return arr.map(itemArr => itemArr.some((insideItem, index) => (insideItem % 2 === 0 && itemArr[index + 1])))
}

// exc 1
function task1(arr) {
    console.log(arr[3][2]);
    console.log(arr[0].length);
    console.log(arr[4][2]);
}

// exc 2
function task2(arr) {
    arr.forEach(item => console.log(item));
    arr.forEach(item => console.log(item.length));
    arr.forEach(insideArr => insideArr.forEach(item => console.log(item)));
}
// task2(task2Array);

// exc 3
function print2DArray(arr) {
    arr.forEach(insideArr => insideArr.forEach(item => console.log(item)))
}

// exc 4
// print2DArray([[2,3,4,], [3,5,6,7]]);

// exc 5
function create2dArray(rows, columns) {
    let filledNumber = 0;
    return new Array(columns).fill(new Array(rows).fill(filledNumber)).map(insideArr => insideArr.map(nr => filledNumber++));
}

console.log(create2dArray(4, 4));
