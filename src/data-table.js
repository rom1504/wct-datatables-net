/* globals customElements */

import { LitElement, html } from 'lit-element'

import dataTablesCss from 'datatables.net-dt/css/jquery.dataTables.css'
import $ from 'jquery'
import 'datatables.net'

export default class DataTable extends LitElement {
  static get properties () {
    return {
      table: { type: Object },
      options: { type: Object }
    }
  }

  firstUpdated () {
    this.table = $(this.shadowRoot.querySelector('#table')).DataTable(this.options)
  }

  render () {
    return html`
      <style>${dataTablesCss}</style>
      <table id="table"></table>
  `
  }
}

customElements.define('data-table', DataTable)
