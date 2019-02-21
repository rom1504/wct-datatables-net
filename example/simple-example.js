/* globals customElements */

import { LitElement, html } from 'lit-element'

import '..'

class SimpleExample extends LitElement {
  render () {
    return html`
     <data-table .options=${{
    'order': [[ 0, 'desc' ]],
    'columns': [
      { title: 'name' },
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
      ['a1', 'b1', 'c1', 'd1', 'e1'],
      ['a2', 'b2', 'c2', 'd2', 'e2']
    ]
  }} @table-created=${e => console.log(e.detail.table)}
     .detailsControls=${{ 'more': (rowData) => `<p>${rowData[4]}</p>` }}
     ></data-table>
  `
  }
}

customElements.define('simple-example', SimpleExample)
