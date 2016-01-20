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

  it('move three consecutive starting consonants to the end and add "ay"', function() {
    expect(threeConsonantHandler("stream")).to.equal('eamstray');
  });

});

describe('functionRouter', function() {
 it('should reject non letter characters', function() {
   expect(functionRouter('s#1')).to.equal('please enter a real word');
 });
});

describe('caseChanger', function() {
 it('should change all strings to lowercase', function() {
   expect(caseChanger('Hello')).to.equal('hello');
 });
});

describe('qHandler', function() {
  it('should move u with q for words starting with "qu"', function() {
    expect(qHandler("quick")).to.equal("ickquay");
  })
})

describe('squHandler', function() {
  it('should move the "u" along with the "sq" to the end of the word',  function() {
    expect(squHandler("squeeze")).to.equal("eezesquay");
  })
})

describe('yHandler', function() {
  it('should treat "y" at the start of word as consonant',  function() {
    expect(yHandler("yellow")).to.equal("ellowyay");
  })
})
