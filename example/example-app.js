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
        { title: 'office' },
        ],
       'data': [
         ['a1', 'b2', 'c3', 'd4'],
         ['a1', 'b2', 'c3', 'd4']
        ] 
    }}></data-table>
  `
  }
}

customElements.define('example-app', ExampleApp)
