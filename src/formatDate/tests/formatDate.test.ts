import { formatDate } from '../formatDate'

describe('my-app:formatDate', () => {
    test('isArrayLike(): true', () => {
        expect(
            formatDate("1616249885000")
        ).toBe(true)
    })
})