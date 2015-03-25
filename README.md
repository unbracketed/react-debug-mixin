[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

# react-debug-mixin
A React mixin component for logging React component lifecycle methods

## Example

```
var ReactDebugMixin = require('react-debug-mixin')

var MyComponent = React.createClass({

    mixins: [ReactDebugMixin],

    render: function() {
      return <div>Check the dev console</div>
    }

});
```

### Apply to all components

You can use [react-mixin-tranformer](https://www.npmjs.com/package/react-mixin-transformer) to apply the debug mixin to all of your components during a build step. Follow the docs to setup your project.
