/* globals customElements */

import { LitElement, html } from 'lit-element'

import '..'

class ExampleApp extends LitElement {
  render () {
    return html`
     <data-table></data-table>
  `
  }
}

customElements.define('example-app', ExampleApp)
