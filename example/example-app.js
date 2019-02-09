/* globals customElements */

import { LitElement, html } from 'lit-element'

import '..'

class ExampleApp extends LitElement {
  render () {
    return html`
     <data-table .options=${{
    'order': [[ 0, 'desc' ]],
    'columns': [
      { title: 'name' },
      { title: 'position' },
      { title: 'salary' },
      { title: 'office' }
    ],
    'data': [
      ['a1', 'b1', 'c1', 'd1'],
      ['a2', 'b2', 'c2', 'd2']
    ]
  }}></data-table>
  `
  }
}

customElements.define('example-app', ExampleApp)
