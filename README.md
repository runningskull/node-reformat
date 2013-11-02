reformat
========

Reformat javascript objects easily

```bash
npm install reformat
```

```javascript
var reformat = require('reformat')
```


### reformat(format, include, input)

- `format`: the final output you want. looks like

```javascript
{
  flattened_field:'some.deeply.nested.field',
  first_in_array:'arr.0',
  nested_obj: {nested:'top_level_key', things:'other_key.things'},
  transformed: ['wacky.field', function(x){ return x.toLowerCase() }]
}
```


- `include`: optional. extra fields to include w/ final output:

```javascript
{
  bring_along: ['this', 'field']
}
```


- `input`: the data to be reformatted

```javascript
// for instance
{
    some: {deeply: {nested: {field: 'FOOBAR'}}},
    arr: ['thing1', 'thing2'],
    top_level_key: 'wat am i doing!?',
    other_key: {things: 'urrday'}
    wacky: {field: 'ThIs Is SoMe WiErD sTuFf'}
}
```

### Example output:

```javascript
{
  flattened_field: 'FOOBAR',
  first_in_array: 'thing1',
  nested_obj: {nested:'wat am i doing!?', things:'urrday'},
  bring_along: ['this', 'field']
  transformed: 'this is some wierd stuff'
}
```


## TODO:
- better tests, better docs, (?)aggregation
