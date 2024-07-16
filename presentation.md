---
title: Functional Programming presentation
date: 2023-08-23
tags: [function_programming, fp]
card: summary
---

# Table of Contents

1.  [Functional Programming](#org82fc8dd)
2.  [Functional Programming](#orgbac0488)
    1.  [What it is](#org119cf10)
    2.  [Little bit of history](#org0589dd0)
    3.  [Changing of paradigms of programming languages](#org007bcf6)
3.  [Concepts of functional programming](#org3f81342)
    1.  [Everything is a function](#org6dc615c)
    2.  [Declarative code](#orgdeea6ec)
        1.  [Examples](#orgcaf5670)
    3.  [Immutability](#org9cb43ad)
        1.  [Examples](#org2db80db)
    4.  [Lazy evaluation](#org6839010)
        1.  [Examples](#org3fcd94c)
    5.  [Recursion](#org8311c58)
        1.  [Example](#org4a1af13)
    6.  [Pure functions](#org4539f12)
        1.  [Examples](#orgb935212)
    7.  [High-order functions](#orga945941)
        1.  [Example](#org7b3bb4b)
4.  [Function composition](#orgc2dea43)
    1.  [Pipe](#orgafc618e)
        1.  [Examples](#org3b6d989)
    2.  [Compose](#orgb3e2d9b)
    3.  [Curry](#org4680968)
        1.  [Examples](#orgab284c1)
5.  [Downsides](#org184e237)
6.  [References](#org10025e9)



<a id="org82fc8dd"></a>

# Functional Programming

![img](./functional.jpg)


<a id="orgbac0488"></a>

# Functional Programming


<a id="org119cf10"></a>

## What it is

-   Programming paradigm
-   It's a way to think about structural code
-   Tech savvy dialect


<a id="org0589dd0"></a>

## Little bit of history

-   Invented by some mathematicians in the 60's
-   First programming language was Lisp
-   One of the first languages to have garbage collector


<a id="org007bcf6"></a>

## Changing of paradigms of programming languages

-   With ES6, JS have introduced a lot of functional programming conceps to it
    -   `.map`
    -   `.reduce`
    -   `.filter`
-   **React:** influencing a whole new field of libraries and developers to be functional
-   Some programming languages started adopting some methods to be multi-paradigm
    -   Java
    -   Rust
    -   Kotlin
    -   Swift


<a id="org3f81342"></a>

# Concepts of functional programming


<a id="org6dc615c"></a>

## Everything is a function

-   No classes, only functions
-   **Why? Easier to extend and easier to fix:** small functions, small contexts, small responsabilities
-   **Everything should receive a data and return a data:** input -> output


<a id="orgdeea6ec"></a>

## Declarative code

What's de diference between these methods in JS?

-   `every()`
-   `filter()`
-   `flatMap()`
-   `map()`
-   `indexOf()`
-   `reduce()`
-   `reduceRigth()`
-   `reverse()`
-   `slice()`
-   `some()`
-   `splice()`

We could implement all these methods with a `for` loop or the `forEach()` method,
they all seem so redundant&#x2026;


<a id="orgcaf5670"></a>

### Examples

1.  Imperative

        const dataModified = [
            { name: 'bar', value: 100 },
            { name: 'bar', value: 101 }
        ]
        
        for (const item of dataModified) {
            item.id = `${item.name}-${item.value}`
        }
        
        console.log(dataModified)

2.  Functional

        const dataModified = [
            { name: 'bar', value: 100 },
            { name: 'bar', value: 101 }
        ]
        
        const result = dataModified.map(item => ({
            ...item,
            id: `${item.name}-${item.value}`
        }))
        
        console.log(result)


<a id="org9cb43ad"></a>

## Immutability

-   You should always treat data as immutable, once created, it cannot be changed
-   Reduces risk of side effects
-   Allows easier parallelization on the same data


<a id="org2db80db"></a>

### Examples

1.  With side effects

        const proPlayer = {
            name: 'Flash',
            game: 'Starcraft: Brood War',
            race: 'Terran',
            matches: { wins: 779, losses: 297 }
        }
        
        function winRate(player) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const games = player.matches.wins + player.matches.losses
                    const winRate = player.matches.wins / games
                    console.log(`Player ${player.name} has a win rate of ${winRate * 100}`)
                    resolve()
                }, 200)
            })
        }
        
        function lostMatch(player) {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('Player has lost a match')
                    player.matches.losses += 1
                    resolve()
                }, 100)
            })
        }
        
        
        winRate(proPlayer)
            .then(() => Promise.all([
                winRate(proPlayer),
                lostMatch(proPlayer),
            ]))

2.  With Immutability

        const proPlayer = {
            name: 'Flash',
            game: 'Starcraft: Brood War',
            race: 'Terran',
            matches: { wins: 779, losses: 297 }
        }
        
        function winRate(player) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const games = player.matches.wins + player.matches.losses
                    const winRate = player.matches.wins / games
                    console.log(`Player ${player.name} has a win rate of ${winRate * 100}`)
                    resolve()
                }, 200)
            })
        }
        
        function lostMatch(player) {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('Player has lost a match')
                    const newData = {
                        ...player,
                        matches: { ...player.matches, losses: player.matches.losses + 1 }
                    }
                    resolve(newData)
                }, 100)
            })
        }
        
        winRate(proPlayer)
            .then(() => Promise.all([
                winRate(proPlayer),
                lostMatch(proPlayer),
            ]))


<a id="org6839010"></a>

## Lazy evaluation

-   It's a mechanism that delays the evaluation of an expression until its value is needed
-   With this, functional languages are able to create infinite lists, which would not normally be available in an imperative language


<a id="org3fcd94c"></a>

### Examples

    const rand = function * () {
        while (true) {
            yield Math.random()
        }
    }
    
    const randIter = rand()
    console.log(randIter.next())
    console.log(randIter.next())
    console.log(randIter.next())


<a id="org8311c58"></a>

## Recursion

See Sergio's presentation about it

-   **Functional programming languages doesn't have loops:** for, while, do while
-   They iterate using recursion
-   That's way their garbage collector is totally diferent from JS and that's why it needs to be lazy loaded


<a id="org4a1af13"></a>

### Example

    function factorial(number) {
        if (number === 0) return 1
        return number * factorial(number - 1)
    }
    
    console.log(factorial(3))


<a id="org4539f12"></a>

## Pure functions

-   Functions shouldn't have any reference outside of it's scope
-   The function should always have the same output for the same input


<a id="orgb935212"></a>

### Examples

1.  Impure

        const newBand = {
            name: 'Black Country, New Road',
            members: ['Tyler', 'Lewis', 'Georgia', 'May', 'Charlie', 'Luke', 'Isaac'],
            albums: ['Ants from Up There']
        }
    
        const newBand = {
            name: 'Black Country, New Road',
            members: ['Tyler', 'Lewis', 'Georgia', 'May', 'Charlie', 'Luke', 'Isaac'],
            albums: ['Ants from Up There']
        }
        
        function releaseRecord(recordName) {
            newBand.albums.push(recordName)
        }
        
        function removeMember(memberName) {
            const index = newBand.members.indexOf(memberName)
            newBand.members.splice(index, 1)
        }
        
        removeMember('Isaac')
        
        console.log(newBand)
        
        releaseRecord('Live at Bush Hall')
        
        console.log(newBand)

2.  Pure

        const newBand = {
            name: 'Black Country, New Road',
            members: ['Tyler', 'Lewis', 'Georgia', 'May', 'Charlie', 'Luke', 'Isaac'],
            albums: ['Ants from Up There']
        }
        
        const releaseRecord = (band, recordName) => ({
            ...band,
            albums: [...band.albums, recordName]
        })
        
        const removeMember = (band, memberName) => ({
            ...band,
            members: band.members.filter(member => member !== memberName)
        })
        
        const bandWithoutIsaac = removeMember(newBand, 'Isaac')
        
        console.log(bandWithoutIsaac)
        
        const bandWithANewRecord = releaseRecord(bandWithoutIsaac, 'Live at Bush Hall')
        
        console.log(newBand)
        console.log(bandWithANewRecord)


<a id="orga945941"></a>

## High-order functions

See Vandre's presentation about closure

-   Function that return a function to be executed later on


<a id="org7b3bb4b"></a>

### Example

    const kingGizzard = {
        name: 'King Gizzard and the Lizard Wizard',
        genres: [
            'garage rock',
            'rock',
            'psychedelic rock',
            'jazz fusion',
            'heavy psychedelic rock',
            'progressive rock',
            'syth pop',
            'thrash metal'
        ]
    }

    const kingGizzard = {
        name: 'King Gizzard and the Lizard Wizard',
        genres: [
            'garage rock',
            'rock',
            'psychedelic rock',
            'jazz fusion',
            'heavy psychedelic rock',
            'progressive rock',
            'syth pop',
            'thrash metal'
        ]
    }
    function validateBandGenre(band) {
        return function(genre) {
            return band.genres.includes(genre)
        }
    }
    
    // or using arrow function ===> const validateBandGenre = band => genre => band.genres.includes(genre)
    
    const validateKingGizzardGenres = validateBandGenre(kingGizzard)
    
    console.log(
        validateKingGizzardGenres('rock')
    )
    console.log(
        validateKingGizzardGenres('pop')
    )


<a id="orgc2dea43"></a>

# Function composition

-   Function that compose based on another function to create a new behavior
-   There's a lot of utility libraries for JS:
    -   **[Lodash FP module](https://github.com/lodash/lodash/wiki/FP-Guide):** doesn't have a lot of utilities
    -   **[Ramda JS](https://ramdajs.com/):** has tons of functions and is focused in functional programming


<a id="orgafc618e"></a>

## Pipe

-   Combine functions to be executed in order
-   The output of one function is the input to the next until there's all functions are executed
-   High-order function that returns a function that has the initial param to be of the first function and returns the output of the last function

    function pipe(...fns) {
        return function(value) {
            return fns.reduce((acc, fn) => fn(acc), value)
        }
    }


<a id="org3b6d989"></a>

### Examples

1.  Without pipe

        const newBand = {
            name: 'Black Country, New Road',
            members: ['Tyler', 'Lewis', 'Georgia', 'May', 'Charlie', 'Luke', 'Isaac'],
            albums: ['Ants from Up There']
        }
        
        const releaseRecord = recordName => band => ({
            ...band,
            albums: [...band.albums, recordName]
        })
        
        const removeMember = memberName => band => ({
            ...band,
            members: band.members.filter(member => member !== memberName)
        })
        
        const bandWithoutIsaac = removeMember('Isaac')(newBand)
        
        console.log(bandWithoutIsaac)
        
        const bandWithANewRecord = releaseRecord('Live at Bush Hall')(bandWithoutIsaac)
        
        console.log(newBand)
        console.log(bandWithANewRecord)

2.  With pipe

        function pipe(...fns) {
            return function(value) {
                return fns.reduce((acc, fn) => fn(acc), value)
            }
        }
        const newBand = {
            name: 'Black Country, New Road',
            members: ['Tyler', 'Lewis', 'Georgia', 'May', 'Charlie', 'Luke', 'Isaac'],
            albums: ['Ants from Up There']
        }
        
        const releaseRecord = recordName => band => ({
            ...band,
            albums: [...band.albums, recordName]
        })
        
        const removeMember = memberName => band => ({
            ...band,
            members: band.members.filter(member => member !== memberName)
        })
        
        const finalLineup = pipe(removeMember('Isaac'), releaseRecord('Live at Bush Hall'))
        
        console.log(
            finalLineup(newBand)
        )


<a id="orgb3e2d9b"></a>

## Compose

-   Same as `pipe`, but the order of execution is from right to left

    function pipe(...fns) {
        return function(value) {
            return fns.reduce((acc, fn) => fn(acc), value)
        }
    }
    const newBand = {
        name: 'Black Country, New Road',
        members: ['Tyler', 'Lewis', 'Georgia', 'May', 'Charlie', 'Luke', 'Isaac'],
        albums: ['Ants from Up There']
    }
    
    function compose(...fns) {
        return pipe(...fns.reverse())
    }
    
    const releaseRecord = recordName => band => ({
        ...band,
        albums: [...band.albums, recordName]
    })
    
    const removeMember = memberName => band => ({
        ...band,
        members: band.members.filter(member => member !== memberName)
    })
    
    const finalLineup = compose(releaseRecord('Live at Bush Hall'), removeMember('Isaac'))
    
    
    console.log(
        finalLineup(newBand)
    )


<a id="org4680968"></a>

## Curry

-   Makes that the function can be invoked with only some of the arguments
-   It is finally executed only when it receives all the arguments from the curried function
    
        function curry(fn, arity) {
            arity ||= fn.length
        
            return function(...args) {
                if (args.length < arity) {
                    return curry(
                        (...lefts) => fn(...args, ...lefts),
                        arity - args.length
                    )
                }
        
                return fn(...args)
            }
        }


<a id="orgab284c1"></a>

### Examples

1.  Without curry

        const kingGizzard = {
            name: 'King Gizzard and the Lizard Wizard',
            genres: [
                'garage rock',
                'rock',
                'psychedelic rock',
                'jazz fusion',
                'heavy psychedelic rock',
                'progressive rock',
                'syth pop',
                'thrash metal'
            ]
        }
        
        function validateBand(band, field, data) {
            if (field === 'name') {
                return band.name === data
            }
        
            if (field === 'genres') {
                return band.genres.includes(data)
            }
        }
        
        console.log(
            validateBand(kingGizzard, 'genres', 'rock')
        )
        console.log(
            validateBand(kingGizzard, 'genres', 'psychedelic rock')
        )

2.  With curry

        const kingGizzard = {
            name: 'King Gizzard and the Lizard Wizard',
            genres: [
                'garage rock',
                'rock',
                'psychedelic rock',
                'jazz fusion',
                'heavy psychedelic rock',
                'progressive rock',
                'syth pop',
                'thrash metal'
            ]
        }
        function curry(fn, arity) {
            arity ||= fn.length
        
            return function(...args) {
                if (args.length < arity) {
                    return curry(
                        (...lefts) => fn(...args, ...lefts),
                        arity - args.length
                    )
                }
        
                return fn(...args)
            }
        }
        
        function validateBand(band, field, data) {
            if (field === 'name') {
                return band.name === data
            }
        
            if (field === 'genres') {
                return band.genres.includes(data)
            }
        }
        
        const curriedValidateBand = curry(validateBand)
        
        const validateKingGizzardGenres = curriedValidateBand(kingGizzard, 'genres')
        
        console.log(
            validateKingGizzardGenres('rock')
        )
        console.log(
            validateKingGizzardGenres('psychedelic rock')
        )


<a id="org184e237"></a>

# Downsides

-   Memory consumption
-   Type system can become complex over time
-   Harder to onboard


<a id="org10025e9"></a>

# References

-   [Learning Functional Programming with Javascript - Anjana Vakil](https://www.youtube.com/watch?v=e-5obm1G_FY)

-   [Ramda presentation - Raoni Normanton](https://github.com/raonifn/ramda-presentation)

-   [Functional Programming Jargons](https://github.com/hemanth/functional-programming-jargon)

