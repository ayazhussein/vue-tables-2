'use strict';

module.exports = function (h, modules, classes, slots) {

    var filterId = 'VueTables__search_' + this.id;
    var genericFilter = this.opts.filterByColumn || !this.opts.filterable ? '' : h(
        'div',
        { 'class': 'VueTables__search-field Test' },
        [h(
            'label',
            {
                attrs: { 'for': filterId },
                'class': classes.label },
            [this.display('filter')]
        ), modules.normalFilter(classes, filterId)]
    );

    var footerHeadings = this.opts.footerHeadings ? h(
        'tfoot',
        null,
        [h(
            'tr',
            null,
            [modules.headings(classes.right)]
        )]
    ) : '';

    return h(
        'div',
        { 'class': "VueTables VueTables--" + this.source },
        [h(
            'div',
            { 'class': classes.row },
            [h(
                'div',
                { 'class': classes.column },
                [h(
                    'div',
                    { 'class': classes.field + ' ' + classes.inline + ' VueTables__search' },
                    [slots.beforeFilter, genericFilter, slots.afterFilter]
                )]
            )]
        ), slots.beforeTable, h(
            'div',
            { 'class': 'table-responsive' },
            [h(
                'table',
                { 'class': 'VueTables__table ' + (this.opts.skin ? this.opts.skin : classes.table) },
                [h(
                    'thead',
                    null,
                    [h(
                        'tr',
                        null,
                        [modules.headings(classes.right)]
                    ), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]
                ), footerHeadings, slots.beforeBody, h(
                    'tbody',
                    null,
                    [slots.prependBody, modules.rows(classes), slots.appendBody]
                ), slots.afterBody]
            )]
        ), h(
            'div',
            { 'class': 'row' },
            [modules.pagination(Object.assign({}, classes.pagination, {
                wrapper: '' + classes.halfColumn,
                nav: classes.center
            })), slots.afterPagination]
        ), slots.afterTable]
    );
};