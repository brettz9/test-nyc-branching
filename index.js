function ArrayWrapOneNumberNeverThrow (n) {
  return (n === 4.2)? new TypeError('oh noes!') : [n];
}

it('lol', function () {
    expect(ArrayWrapOneNumberNeverThrow(0)).to.deep.equal([0]);
});
