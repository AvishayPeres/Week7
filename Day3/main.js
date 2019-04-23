// const factorial = function (number, sum=number) {
//     if (number === 1) { return sum }
//         sum *= number - 1
//         number--

//     return factorial(number, sum)
// }

// console.log (factorial(5))

const reverString = function (string){
    if(string === ""){return string}
     
        return reverString(string.substr(1)) + string[0]
}
   console.log (reverString("avishay"))
