const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('testa a chamada da funcação callback', (done) => {
  upperCase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
});