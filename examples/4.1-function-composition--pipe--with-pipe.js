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
