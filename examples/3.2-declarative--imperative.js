const dataModified = [
    { name: 'bar', value: 100 },
    { name: 'bar', value: 101 }
]

for (const item of dataModified) {
    item.id = `${item.name}-${item.value}`
}

console.log(dataModified)
