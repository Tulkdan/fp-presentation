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
