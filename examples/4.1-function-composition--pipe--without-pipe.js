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
