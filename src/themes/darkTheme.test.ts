import darkTheme from './darkTheme'

describe('darkTheme', () => {
  it('Should match darkTheme', () => {
    expect(darkTheme).toMatchSnapshot()
  })
})
