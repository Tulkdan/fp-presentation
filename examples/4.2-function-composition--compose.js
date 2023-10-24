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
