import { run } from '.';

xtest('run', () => {
  console.log = jest.fn();

  run();

  expect(console.log).toBeCalledWith('Hello world!');
});
