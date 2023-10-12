let test = 10
function first() {
    test += 5
    console.log(test)
    if (true) {
        test +=5
        console.log(test)
    }
}
console.log(test)