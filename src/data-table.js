/* globals customElements, CustomEvent */

import { LitElement, html } from 'lit-element'

import dataTablesCss from 'datatables.net-dt/css/jquery.dataTables.css'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css'
import bootstrapDT from 'datatables.net-bs4/css/dataTables.bootstrap4.css'
import 'bootstrap'
import 'popper.js'
import 'datatables.net-bs4'
import $ from 'jquery'
import 'datatables.net'
import detailsOpen from './assets/details_open.png'
import detailsClose from './assets/details_close.png'

export default class DataTable extends LitElement {
  static get properties () {
    return {
      table: { type: Object },
      options: { type: Object },
      detailControls: { type: Object }
    }
  }

  constructor () {
    super()
    this.detailsControls = {}
  }

  firstUpdated () {
    this.table = $(this.shadowRoot.querySelector('#table')).DataTable(this.options)
    let event = new CustomEvent('table-created', {
      detail: {
        table: this.table
      }
    })
    this._enableDetailControls()
    this.dispatchEvent(event)
  }

  _enableDetailControls () {
    Object.keys(this.detailsControls).forEach(className => {
      const format = this.detailsControls[className]
      const self = this
      $(this.shadowRoot.querySelector('#table')).on('click', 'td.' + className, function () {
        const tr = $(this).closest('tr')
        const row = self.table.row(tr)

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide()
          tr.removeClass('shown')
        } else {
          // Open this row
          row.child(format(row.data())).show()
          tr.addClass('shown')
        }
      })
    })
  }

  render () {
    return html`
      <style>${dataTablesCss}
      ${bootstrapCss}
      ${bootstrapDT}
      td.details-control {
          background: url(${detailsOpen}) no-repeat center center;
          cursor: pointer;
      }
      tr.shown td.details-control {
          background: url(${detailsClose}) no-repeat center center;
      }
      </style>
      <table id="table" class="table table-striped table-bordered" style="width:100%"></table>
  `
  }
}

customElements.define('data-table', DataTable)
