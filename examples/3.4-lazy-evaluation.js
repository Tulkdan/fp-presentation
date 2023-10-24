const rand = function * () {
    while (true) {
        yield Math.random()
    }
}

const randIter = rand()
console.log(randIter.next())
console.log(randIter.next())
console.log(randIter.next())
