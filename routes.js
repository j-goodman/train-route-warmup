montreal = { name: "Montreal", connections: [] }
ottawa = { name: "Ottawa", connections: [] }
kingston = { name: "Kingston", connections: [] }
burlington = { name: "Burlington", connections: [] }
quebec = { name: "Quebec", connections: [] }

const makeConnection = (array) => {
    const first = array[0]
    const second = array[1]
    first.connections.push(second)
    second.connections.push(first)
}

const connections = [
    [montreal, ottawa],
    [ottawa, kingston],
    [montreal, burlington],
    [montreal, quebec],
]

connections.forEach(connection => {
    makeConnection(connection)
})