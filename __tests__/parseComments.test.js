const parser = require('../src/parser/commentBlockParser.js');

describe('parseComments', () => {
  parser.getJSDocs('hello');
  it('should be true', () => expect(true).toEqual(true));
});

describe('parseComments', () => {
  it('should be true', () => expect(true).toEqual(true));
});