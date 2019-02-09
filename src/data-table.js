/* globals customElements */

import { LitElement, html } from 'lit-element'

import datatablesCss from 'datatables.net-dt/css/jquery.dataTables.css'
import $ from 'jquery'
import 'datatables.net'

export default class DataTable extends LitElement {
  static get properties () {
    return {
      table: { type: Object }
    }
  }

  firstUpdated () {
    this.displayPacketsTable()
    this.table = $(this.shadowRoot.querySelector('#table')).DataTable({
      'order': [[ 0, 'desc' ]],
      'columns': [
        null,
        null,
        null,
        { width: '70%' }
      ]
    })
  }

  displayPacketsTable () {
    setInterval(() => {
      this.table.row.add([new Date().toLocaleTimeString(), 'lol1', 'lol2', 'lol3']).draw('full-hold')
    }, 1000)
  }

  render () {
    return html`
      <style>${datatablesCss}</style>
      <table id="table">
          <thead>
            <tr>
                <th>Time</th>
                <th>Protocol</th>
                <th>Name</th>
                <th>Params</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
  `
  }
}

customElements.define('data-table', DataTable)
