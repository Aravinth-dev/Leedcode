const countDigit = (n) => {
    let sum = 0
    while(n > 0){
        sum += n%10 
        n = Math.floor(n/10)
    }
    return sum
}

n = 523
console.log(countDigit(n))