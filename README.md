# wct-datatables-net
[![NPM version](https://img.shields.io/npm/v/wct-datatables-net.svg)](http://npmjs.com/package/wct-datatables-net)
[![Build Status](https://img.shields.io/circleci/project/rom1504/wct-datatables-net/master.svg)](https://circleci.com/gh/rom1504/wct-datatables-net)

Web component for [datatables.net](https://datatables.net)

## Installation

`npm install wct-datatables-net`

## Usage

Example of usage in a lit-element component :

```js
import { LitElement, html } from 'lit-element'

import 'wct-datatables-net'

class ExampleApp extends LitElement {

  render () {
    return html`
     <data-table></data-table>
  `
  }
}

customElements.define('example-app', ExampleApp)
```

Also see example/ folder

