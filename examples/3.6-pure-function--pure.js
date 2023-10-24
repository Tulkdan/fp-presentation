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
