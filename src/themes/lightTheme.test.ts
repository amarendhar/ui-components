import lightTheme from './lightTheme'

describe('lightTheme', () => {
  it('Should match lightTheme', () => {
    expect(lightTheme).toMatchSnapshot()
  })
})
