/* globals customElements, CustomEvent */

import { LitElement, html, css, unsafeCSS } from 'lit-element'

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
      detailsControls: { type: Object }
    }
  }

  constructor () {
    super()
    this.detailsControls = {}
  }

  updated (changedProperties) {
    if (changedProperties.has('options') && this.options !== undefined) {
      if (this.table !== undefined) {
        this.table.destroy()
        $('#table').html('')
      }
      this.table = $(this.shadowRoot.querySelector('#table')).DataTable(this.options)
      let event = new CustomEvent('table-created', {
        detail: {
          table: this.table
        }
      })
      this.dispatchEvent(event)
    }

    if (this.options !== undefined && this.detailsControls !== undefined && (changedProperties.has('options') || changedProperties.has('detailsControls'))) {
      this._disableDetailControls()
      this._enableDetailControls()
    }
  }

  _disableDetailControls () {
    $(this.shadowRoot.querySelector('#table')).off('click')
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

  static get styles () {
    return [
      unsafeCSS(bootstrapCss),
      unsafeCSS(bootstrapDT),
      css`
      td.details-control {
          background: url(${unsafeCSS(detailsOpen)}) no-repeat center center;
          cursor: pointer;
      }
      tr.shown td.details-control {
          background: url(${unsafeCSS(detailsClose)}) no-repeat center center;
      }
      `
    ]
  }

  render () {
    return html`<table id="table" class="table table-striped table-bordered" style="width:100%"></table>`
  }
}

customElements.define('data-table', DataTable)
