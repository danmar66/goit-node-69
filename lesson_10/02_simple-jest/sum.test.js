const sum = require('./sum')

describe('sum', () => {
  beforeAll(() => {
    console.log('It run before all tests')
  })

  afterAll(() => {
    console.log('It run after all tests')
  })

  beforeEach(() => {
    console.log('It should run before each test')
  })

  it('1 + 2 should return 3', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it('1 + -2 should return -1', () => {
    const result = sum(1, -2)
    expect(result).toBe(-1)
  })

  describe('not a number', () => {
    test('1 + 2 should return -1', () => {
      const result = sum('1', -2)
      expect(result).toBe(-1)
    })
  })
})
