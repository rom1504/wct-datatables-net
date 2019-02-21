/* globals customElements */

import { LitElement, html } from 'lit-element'

import './simple-example'
import './updating-table'

class ExampleApp extends LitElement {
  render () {
    return html`
     <simple-example></simple-example>
     <updating-table></updating-table>
  `
  }
}

customElements.define('example-app', ExampleApp)
