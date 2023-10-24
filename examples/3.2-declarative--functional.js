const dataModified = [
    { name: 'bar', value: 100 },
    { name: 'bar', value: 101 }
]

const result = dataModified.map(item => ({
    ...item,
    id: `${item.name}-${item.value}`
}))

console.log(result)
