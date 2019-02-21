/* globals customElements */

import { LitElement, html } from 'lit-element'

import '..'

class UpdatingTable extends LitElement {
  static get properties () {
    return {
      tableOptions: { type: String }
    }
  }

  updateTable () {
    this.tableOptions = {
      'order': [[ 0, 'desc' ]],
      'destroy': true,
      'columns': [
        { title: 'name' + Math.floor(Math.random() * 100) },
        { title: 'position' },
        { title: 'salary' },
        { title: 'office' },
        {
          'className': 'details-control more',
          'orderable': false,
          'data': null,
          'defaultContent': ''
        }
      ],
      'data': [
        ['a1', 'b1' + Math.floor(Math.random() * 100), 'c1', 'd1', 'e1'],
        ['a2', 'b2', 'c2', 'd2', 'e2']
      ]
    }
  }

  render () {
    return html`
    <button @click=${e => this.updateTable()}>Update table</button>
     <data-table .options=${this.tableOptions} @table-created=${e => console.log(e.detail.table)}
     .detailsControls=${{ 'more': (rowData) => `<p>${rowData[4]}</p>` }}
     ></data-table>
  `
  }
}

customElements.define('updating-table', UpdatingTable)
