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
