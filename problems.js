// Write a function that returns true if two cities are adjacent, or false if
// they are not. For example: isAdjacent(montreal, ottawa) returns true, but
// isAdjacent(burlington, quebec) returns false
isAdjacent = (firstCity, secondCity) => {
    return firstCity.connections.includes(secondCity)
}

// Return the number of nodes in between the first city and the second.
distanceBetween = (firstCity, secondCity) => {
    const queue = [{city: firstCity, distanceAway: 0}]
    const checked = {}

    while (queue.length > 0) {
        let current = queue.shift()
        let currentCity = current.city
        let depth = current.distanceAway
        checked[currentCity.name] = true
        if (currentCity.name === secondCity.name) {
            return depth - 1
        }
        currentCity.connections.forEach(city => {
            if (!checked[city.name]) {
                queue.push({city: city, distanceAway: depth + 1})
            }
        })
    }
}

console.log(
    distanceBetween(kingston, quebec)
)