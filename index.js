var traverse = require('traverse')
  , extend = require('extend')
  , util = require('util')


function reformat(format, include, input) {
  var tformat = traverse(format)
    , tinput = traverse(input)

  var tmapped = tformat.map(function(path) {
    // Arrays aren't to be walked, since we use them for defining
    // transformation functions
    if (this.parent && util.isArray(this.parent.node))
      return;

    if (typeof path == 'string')
      return tinput.get(path.split('.'));

    if (util.isArray(path))
      return path[1](tinput.get(path[0].split('.')));
  })

  return include ? extend(tmapped, include) : tmapped
}


module.exports = reformat

