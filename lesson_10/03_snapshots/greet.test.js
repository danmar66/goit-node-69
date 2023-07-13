const greet = require('./greet.js')

describe('sum', () => {
  it('should return greeting', () => {
    const result = greet()
    expect(result).toMatchInlineSnapshot(`"Hello"`)
  })
})
