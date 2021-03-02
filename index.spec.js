const assertEquals = require('./index')

var complexObject1 = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1,
    propC: 2
  }
};
var complexObject1Copy = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1,
    propC: 2
  }
};
var complexObject2 = {
  propA: 1,
  propB: {
    propB: 1,
    propA: [1, { propA: 'a', propB: 'c' }, 3],
    propC: 2
  }
};

var complexObject3 = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1
  }
};

describe('assertEquals__can_compare_strings', () => {
  it('doesnt throw when 2 strings that are equal are compared', () => {
    expect(() => assertEquals('abc', 'abc')).not.toThrow()
  })
  it('throws an error when 2 strings that are not equal are compared', () => {
    expect(() => assertEquals("abcef", "abc")).toThrow('Expected abcef but found abc')
  })
})

describe('assertEquals__can_compare_data_types', () => {
  it('throws an error when 2 different data types are compared', ()=> {
    expect(() => assertEquals(['a'], {0: 'a'})).toThrow('Expected type Array but found type object')
  })
})

describe('assertEquals__can_compare_arrays', () => {
it('throws an error when 2 arrays that are not equal in length are compared', () => {
  expect(() => assertEquals(['a', 'b'], ['a', 'b', 'c'])).toThrow('Expected array length 2 but found 3')
  })
})