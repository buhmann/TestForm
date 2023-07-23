/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Ui/js/form/form'
], function(
    Component
) {
    'use strict';
    return Component.extend({
        submit: function (redirect) {
            this._super(true);
        },
    });
});
