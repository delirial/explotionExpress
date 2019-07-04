import { dice } from '../gamesController'

describe('Games testing', () => {
    it('Throw dice',() => {
        const result = dice(5)
        expect(result).toBe(2)
    })
}) 