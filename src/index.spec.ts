import {run} from '.'

test('run', () => {
  console.log = jest.fn()

  run()

  expect(console.log).toBeCalledWith('Hello world!')
})
