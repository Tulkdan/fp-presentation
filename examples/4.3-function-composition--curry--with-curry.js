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
