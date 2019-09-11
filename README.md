# React Devtools disable(r)

This module provides an easy way to disable React Devtools browser extension in the production environment

## Usage
```javascript
import { disableDevToolsWhen } from 'react-devtools-disable';
import { isProdMode } from 'whatever'; // function

disableDevToolsWhen(isProdMode);
ReactDOM.render(..., ...);
```

or

```javascript
import { disableDevTools } from 'react-devtools-disable';

if (window.location.port !== 443) {
    disableDevTools();
}
ReactDOM.render(..., ...);
```

## License
MIT
