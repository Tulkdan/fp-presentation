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
