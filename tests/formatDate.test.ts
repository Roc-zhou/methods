import { formatDate } from '../src/time/index'

describe('my-app:formatDate', () => {
  test('formatDate', () => {
    expect(
      formatDate(1616249885000)
    ).toBe('2021-03-20 22:18:05')
  })
})