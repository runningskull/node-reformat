// TODO: better tests

var reformat = require('..')

var tests = exports.tests = {}

tests.setUp = function(done) {
  this.input = {
    foo: {bar: 'baz'},
    characters: {
      jack: {namef:'Jack', namel:'Smith', occupation:'Hill Climber'},
      jill: {namef:'Jill', namel:'Johnson', occupation:'Bucket Holder'}
    },
    cities: {sf:"SanFran", ny:"NewYork"}
  }

  this.format = {
    ZAB: reformat.convert('foo.bar', function(x){ return x.toUpperCase() }),
    jobs: {
      jack: 'characters.jack.occupation',
      jill: 'characters.jill.occupation'
    },
    arr: ['cities.sf', 'cities.ny']
  }

  done()
}

tests.tearDown = function(done) {
 done()
}

tests.test_reformat = function(test) {
  var refd = reformat(this.format, this.input)

  var expected = {
    ZAB: 'BAZ',
    jobs: {
      jack: 'Hill Climber',
      jill: 'Bucket Holder'
    },
    arr: ['SanFran', 'NewYork']
  }

  test.deepEqual(refd, expected, 'Reformatted correctly')
  test.done()
}

