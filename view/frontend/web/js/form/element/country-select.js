/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'ko',
    'Magento_Ui/js/form/element/select',
    'mage/translate'
], function ($, ko, select) {
    'use strict';

    return select.extend({

        initialize: function () {
            this._super();

            $.getJSON( 'https://restcountries.eu/rest/v2/all', {
                format: "json"
            }).done(function( data ) {
                var countryes = [];
                $.each( data, function( i, item ) {
                    countryes.push({
                        label: item.name,
                        value: item.alpha2Code,
                        labeltitle: item.name
                    });
                });

                this.options(countryes);
            }.bind(this));

            return this;
        },

    });
});