const factorial = function (number, sum=number) {
    if (number === 1) { return sum }
        sum *= number - 1
        number--

    return factorial(number, sum)
}

console.log (factorial(5))