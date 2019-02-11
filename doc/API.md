# API

`<datatable .options='{}'></datatable>`

## Properties

### options

construction options for the table, see [datatables options](https://datatables.net/manual/options)

### table

Expose the datatables object, see [datatables api](https://datatables.net/manual/api) for the full API

### detailsControls

Optional property, a mapping of className to function taking the row and returning the html to display.
Can be used to produce something like [row details example](https://datatables.net/examples/api/row_details.html)

## Events

### table-created

Emitted when the table has been created, provide the table in `{detail:{table}}` of the event
