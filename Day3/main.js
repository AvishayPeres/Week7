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


const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (arr1,arr2){
    if(arr1.length === 0){return arr1,arr2}
        arr2.push(arr1.splice(0,1))

    return swap(arr1,arr2)
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]
