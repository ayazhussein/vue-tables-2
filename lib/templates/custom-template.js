module.exports = function (h, modules, classes, slots) {

    const filterId = 'VueTables__search_' + this.id
    debugger;
    const genericFilter = this.opts.filterByColumn || !this.opts.filterable ? '' :
        (<div class="VueTables__search-field Test">
            <label for={filterId} class={classes.label}>{this.display('filter')}</label>
            {modules.normalFilter(classes, filterId)}
        </div>)

    const footerHeadings = this.opts.footerHeadings ?
        <tfoot>
        <tr>{modules.headings(classes.right)}</tr>
        </tfoot> : ''

    return <div class={"VueTables VueTables--" + this.source}>
        <div class={classes.row}>
            <div class={classes.column}>

                <div class={`${classes.field} ${classes.inline} VueTables__search`}>
                    {slots.beforeFilter}
                    {genericFilter}
                    {slots.afterFilter}
                </div>
            </div>
        </div>
        {slots.beforeTable}
        <div class="table-responsive">
            <table class={`VueTables__table ${this.opts.skin ? this.opts.skin : classes.table}`}>
                <thead>
                <tr>
                    {modules.headings(classes.right)}
                </tr>
                {slots.beforeFilters}
                {modules.columnFilters(classes)}
                {slots.afterFilters}
                </thead>
                {footerHeadings}
                {slots.beforeBody}
                <tbody>
                {slots.prependBody}
                {modules.rows(classes)}
                {slots.appendBody}
                </tbody>
                {slots.afterBody}
            </table>
        </div>
        {modules.pagination(Object.assign({}, classes.pagination, {
            wrapper: `${classes.row} ${classes.column}`,
            nav: classes.center
        }))}
        {slots.afterTable}
    </div>
}
