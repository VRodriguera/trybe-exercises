const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('testa a chamada da funcação callback', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
});