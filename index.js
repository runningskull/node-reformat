var traverse = require('traverse')
  , selectn = require('selectn')
  , extend = require('extend')

function is_string(x) {
  return (
    (typeof x == 'string') ||
    (x instanceof String)
  )
}

function convert(path, fn) {
  var cpath = new String(path)
  cpath.convert = fn
  return cpath
}

function reformat(output, input) {
  // Return curried version if no second param
  if (! input) {
    return reformat.bind(null, output)
  }

  var travout = traverse(output)
    , travin = traverse(input)

  return travout.map(function(path) {
    if (is_string(path)) {
      var val = travin.get(path.split('.'))
      return path.convert ? path.convert(val) : val
    }
  })
}


module.exports = reformat
module.exports.convert = convert

