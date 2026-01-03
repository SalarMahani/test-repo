import { test, expect } from 'vitest';

test('Asynchronous code accidentally passes', async () => {
  expect.assertions(1);
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('promise 🦦');
    }, 1000);
    expect(true).toBe(true);
  });
  await promise;
});

test('Asynchronous code has zero expectations', () => {
  expect.assertions(0);
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});

test.fails('Code inside of callback never runs', () => {
  expect.hasAssertions();
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});
