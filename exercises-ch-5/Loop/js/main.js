function loop(start, test, update, action) {
  for (let value = start; test(value); value = update(value)) {
    action(value);
  }
}
