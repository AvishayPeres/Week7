// -------------------- Recursion -----------------

// const factorial = function (number, sum=number) {
//     if (number === 1) { return sum }
//         sum *= number - 1
//         number--

//     return factorial(number, sum)
// }

// console.log (factorial(5))

// const reverString = function (string){
//     if(string === ""){return string}

//         return reverString(string.substr(1)) + string[0]
// }
//    console.log (reverString("avishay"))


// const arr1 = [1, 2, 3]
// const arr2 = []

// const swap = function (arr1,arr2){
//     if(arr1.length === 0){return arr1,arr2}
//         arr2.push(arr1.splice(0,1))

//     return swap(arr1,arr2)
// }

// swap(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]


// ------------- Matrices ------------------

// function generateMatrix(numRows, numColumns) {
//     let matrix = []
//     let num = 1

//     for (let r = 0; r < numRows; r++) {
//         matrix.push([])
//         for (let c = 0; c < numColumns; c++) {
//             matrix[r].push(num++)
//         }
//     }
//     return matrix
// }

// let matrix = generateMatrix(3, 4)
// // console.log(matrix[1][2])

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         // console.log(matrix[i][j])
//     }
// }


// const get = function (matrix, rowNum, colNum) {
//     return matrix[rowNum][colNum]
// }
// console.log(matrix[1][2])

// Spot check - PRINTING

// function print(matrix) {

//     for (let i = 0; i < matrix.length; i++) {
//         let line = ""
//         for (let j = 0; j < matrix[i].length; j++) {
//             line += (matrix[i][j] + "\t")
//         }
//         console.log(line)
//     }
// }
// print(matrix)


// function printColumn(matrix, colNum) {
//     for (let i = 0; i < matrix.length; i++) {
//         console.log(matrix[i][colNum])
//     }
// }

// function printRow(matrix, rowNum) {
//     for (let i = 0; i < matrix[rowNum].length; i++) {
//         console.log(matrix[rowNum][i])
//     }
// }
// // printRow(1)


// // (function that receives three parameters, and updates the value accordingly.
// const alter = function (r, c, v) {
//     this.matrix[r][c] = v
// }

// ------------Ex.1-----

function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1

    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}
function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

function printRow(matrix, rowNum) {
    for (let i = 0; i < matrix[rowNum].length; i++) {
        console.log(matrix[rowNum][i])
    }
}
// printRow()

function print(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        let line = ""
        for (let j = 0; j < matrix[i].length; j++) {
            line += (matrix[i][j] + "\t")
        }
        console.log(line)
    }
}

const alter = function (matrix, r, c, v) {
    matrix[r][c] = v
}

const get = function (matrix, rowNum, colNum) {
    return matrix[rowNum][colNum]
}

class Matrix {
    constructor(rows, columns) {
        this.matrix = generateMatrix(rows, columns)
    }
    alter(r, c, v) {
        return alter(this.matrix, r, c, v)
    }
    print() {
        print(this.matrix)
    }
    printColumn(c) {
        printColumn(this.matrix, c)
    }
    printRow(r) {
        printRow(this.matrix, r)
    }
    get(r, c) {
        return get(this.matrix, r, c)
    }
}

let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)