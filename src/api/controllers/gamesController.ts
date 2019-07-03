function dice(steps : number) {
    return Math.floor(Math.random() * steps + 1)
}

module.exports = { dice }