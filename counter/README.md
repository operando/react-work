# Flux Counter Sample

* WEB+DB 87 flux

## setup

```
npm init
npm install -g watchify
npm install --save browserify
npm install --save reactify
npm install --save react
npm install --save react-dom
npm install --save fluxxor
```

or

```
npm install

```

## build

### React

```
watchify -t reactify src/app.jsx -o dest/app.js -v
```

### React + Fluxxor

```
watchify -t reactify src/flux_counter.jsx -o dest/app.js -v
```

## ReactDOMがない問題

npmでreact-domを入れて、requireすればOK.

```js
var ReactDOM = require('react-dom');
```