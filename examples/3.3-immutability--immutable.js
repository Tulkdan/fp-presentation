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
