// TODO: better tests

var reformat = require('..')

var tests = exports.tests = {}

tests.setUp = function(done) {
  this.input = {
    foo: {bar: 'baz'},
    characters: {
      jack: {namef:'Jack', namel:'Smith', occupation:'Hill Climber'},
      jill: {namef:'Jill', namel:'Johnson', occupation:'Bucket Holder'}
    }
  }

  this.format = {
    ZAB: ['foo.bar', function(x){ return x.toUpperCase() }],
    jobs: {
      jack: 'characters.jack.occupation',
      jill: 'characters.jill.occupation'
    }
  }

  this.include = {
    extra: ['fields', 'w00t']
  }

  done()
}

tests.tearDown = function(done) {
 done()
}

tests.test_reformat = function(test) {
  var refd = reformat(this.format, this.include, this.input)

  var expected = {
    ZAB: 'BAZ',
    jobs: {
      jack: 'Hill Climber',
      jill: 'Bucket Holder'
    },
    extra: ['fields', 'w00t']
  }

  test.deepEqual(refd, expected, 'Reformatted correctly')
  test.done()
}

