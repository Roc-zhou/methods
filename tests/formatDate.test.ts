import { formatDate } from '../src/formatDate/formatDate'

describe('my-app:formatDate', () => {
    test('formatDate(1616249885000)', () => {
        expect(
            formatDate("1616249885000")
        ).toBe('2021-03-20 22:18:05')
    })
})