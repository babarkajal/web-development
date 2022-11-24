const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
});
