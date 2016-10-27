reformat
========

Reformat javascript objects easily

```bash
npm install reformat
```

```javascript
var reformat = require('reformat')
```

## Usage

Let's say you have some data that looks like this:

```javascript
{
    some: {deeply: {nested: {field: 'FOOBAR'}}},
    arr: ['thing1', 'thing2'],
    top_level_key: 'toplev',
    other_key: {things: ['every', 'day']},
    prices: {foo:111, bar:222},
    wacky: {field: 'ThIs Is SoMe WiErD sTuFf'}
}
```

and you want data that looks like this:

```javascript
{
  flattened_field: 'FOOBAR',
  first_in_array: 'thing1',
  nested_obj: {
    nested: 'toplev', 
    fields: 'day'
  },
  prices: [111, 222],
  munged_field: 'this is some wierd stuff'
}
```


### reformat(output, input)

#### `output`: the final output structure you want

Should be an object whose keys are either `"dot.separated.paths"`,
or further nested structures.

```javascript
{
  flattened_field: 'some.deeply.nested.field',
  first_in_array: 'arr.0',
  nested_obj: {
    nested: 'top_level_key', 
    fields: 'other_key.things.1'
  },
  arr: ['prices.foo', 'prices.bar']
}
```

If one of your fields needs some additional conversion, you can
use the [`reformat.convert(path, fn)`](https://github.com/runningskull/node-reformat/blob/master/index.js#L12) function like this:

```javascript
{
  munged_field: reformat.convert('wacky.field', (x) => x.toLowerCase())
}
```

#### `input`: the data to be reformatted

-----

### TODO:
- better docs
- more thorough tests
