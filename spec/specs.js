describe("handlers", function() {
  it('should  add ay to end of words starting with vowel', function() {
      expect(vowelHandler('all')).to.equal("allay");
  });

  it('move all single starting consonants to the end and add "ay"', function() {
      expect(singleConsonantHandler('lock')).to.equal("ocklay");

  });

  it('move two consecutive starting consonants to the end and add "ay"', function() {
    expect(twoConsonantHandler("block")).to.equal('ockblay');
  });
});
