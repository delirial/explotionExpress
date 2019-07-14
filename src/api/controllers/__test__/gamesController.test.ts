import { dice } from '../gamesController';

describe('Games testing', () => {
    it('Should return a value between 0 and 6', () => {
        const result = dice(6);
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(7);
    });
});
